import { add } from "date-fns";
import { datatype, random } from "faker/locale/en_US";

import {
  defaultDealCategories,
  defaultDealStages,
} from "../../../root/defaultConfiguration";
import type { Deal } from "../../../types";
import type { Db } from "./types";
import { randomDate, weightedArrayElement } from "./utils";
import {
  dealDescriptions,
  projects,
  roundAmount,
  unitsByCategory,
} from "./realEstateData";

const dealSectors = ["inmobiliaria", "inversor", "empresa-corporativa"];

export const generateDeals = (db: Db): Deal[] => {
  const deals = Array.from(Array(45).keys()).map((id) => {
    // quienes compran o traen compradores: inmobiliarias, inversores, empresas
    const company = random.arrayElement(
      db.companies.filter((c) => dealSectors.includes(c.sector)),
    );
    company.nb_deals = (company.nb_deals ?? 0) + 1;
    const contacts = random.arrayElements(
      db.contacts.filter((contact) => contact.company_id === company.id),
      datatype.number({ min: 1, max: 3 }),
    );
    const category = random.arrayElement(defaultDealCategories).value;
    const unit = unitsByCategory[category] ?? unitsByCategory.otro;
    const project = random.arrayElement(projects);
    const created_at = randomDate(new Date(company.created_at)).toISOString();

    const expected_closing_date = randomDate(
      new Date(created_at),
      add(new Date(created_at), { months: 6 }),
    )
      .toISOString()
      .split("T")[0];

    return {
      id,
      name: `${project} · ${random.arrayElement(unit.units)}`,
      company_id: company.id,
      contact_ids: contacts.map((contact) => contact.id),
      categories: [category],
      // más consultas que cierres, como en un embudo real
      stage: weightedArrayElement<string>(
        defaultDealStages.map((s) => s.value),
        [10, 8, 7, 8, 4, 3],
      ),
      description: random.arrayElement(dealDescriptions),
      amount: roundAmount(unit.min, unit.max),
      created_at,
      updated_at: randomDate(new Date(created_at)).toISOString(),
      expected_closing_date,
      sales_id: company.sales_id!,
      index: 0,
    };
  });
  // compute index based on stage
  defaultDealStages.forEach((stage) => {
    deals
      .filter((deal) => deal.stage === stage.value)
      .forEach((deal, index) => {
        deals[deal.id].index = index;
      });
  });
  return deals;
};
