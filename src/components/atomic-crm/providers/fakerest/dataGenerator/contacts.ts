import { random } from "faker/locale/en_US";

import { defaultNoteStatuses } from "../../../root/defaultConfiguration";
import type { Company, Contact } from "../../../types";
import type { Db } from "./types";
import { randomDate, weightedBoolean } from "./utils";
import {
  backgroundsBySector,
  pickGenderedName,
  phoneFor,
  places,
  slug,
  titlesBySector,
} from "./realEstateData";

const maxContacts = {
  1: 3,
  10: 6,
  50: 10,
  250: 12,
  500: 12,
};

const getRandomContactDetailsType = () =>
  random.arrayElement(["Work", "Home", "Other"]) as "Work" | "Home" | "Other";

export const generateContacts = (db: Db, size = 200): Required<Contact>[] => {
  return Array.from(Array(size).keys()).map((id) => {
    // elegir una empresa que todavía tenga lugar para contactos
    let company: Company;
    do {
      company = random.arrayElement(db.companies);
    } while ((company.nb_contacts ?? 0) >= maxContacts[company.size]);
    company.nb_contacts = (company.nb_contacts ?? 0) + 1;

    const { gender, female, first_name, last_name } = pickGenderedName();
    const domain = company.website.replace(/^https:\/\/www\./, "");
    const email_jsonb = [
      {
        email: `${slug(first_name)}.${slug(last_name)}@${domain}`,
        type: "Work" as const,
      },
    ];
    const place =
      places.find((p) => p.city === company.city) ??
      random.arrayElement(places);
    const phone_jsonb = [
      { number: phoneFor(place), type: "Work" as const },
      ...(weightedBoolean(40)
        ? [{ number: phoneFor(place), type: getRandomContactDetailsType() }]
        : []),
    ];
    // sin fotos: se muestran las iniciales
    const avatar = { src: undefined };
    const titles = titlesBySector[company.sector] ?? titlesBySector.otro;
    const title = random.arrayElement(titles)[female ? 1 : 0];

    const first_seen = randomDate(new Date(company.created_at)).toISOString();
    const last_seen = first_seen;

    return {
      id,
      first_name,
      last_name,
      gender,
      title,
      company_id: company.id,
      company_name: company.name,
      email_jsonb,
      phone_jsonb,
      background: random.arrayElement(
        backgroundsBySector[company.sector] ?? backgroundsBySector.otro,
      ),
      acquisition: random.arrayElement(["inbound", "outbound"]),
      avatar,
      first_seen: first_seen,
      last_seen: last_seen,
      has_newsletter: weightedBoolean(30),
      status: random.arrayElement(defaultNoteStatuses).value,
      tags: random
        .arrayElements(db.tags, random.arrayElement([0, 0, 0, 1, 1, 2]))
        .map((tag) => tag.id), // finalize
      sales_id: company.sales_id!,
      nb_tasks: 0,
      linkedin_url: null,
    };
  });
};
