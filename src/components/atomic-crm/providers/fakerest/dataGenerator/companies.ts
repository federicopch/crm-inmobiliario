import { datatype, random } from "faker/locale/en_US";

import { randomDate } from "./utils";
import type { Company, RAFile } from "../../../types";
import type { Db } from "./types";
import {
  address,
  companySeeds,
  phoneFor,
  places,
  slug,
} from "./realEstateData";

export const generateCompanies = (db: Db): Required<Company>[] => {
  return companySeeds.map((seed, id) => {
    const place = random.arrayElement(places);
    const domain = `${slug(seed.name)}.com.ar`;
    return {
      id,
      name: seed.name,
      logo: { title: seed.name, src: "" } as RAFile,
      sector: seed.sector,
      size: seed.size,
      linkedin_url: `https://www.linkedin.com/company/${slug(seed.name)}`,
      website: `https://www.${domain}`,
      phone_number: phoneFor(place),
      address: address(),
      zipcode: String(datatype.number({ min: 1000, max: 9400 })),
      city: place.city,
      state_abbr: place.province,
      nb_contacts: 0,
      nb_deals: 0,
      // al menos un tercio de las empresas para el usuario de la demo
      sales_id: datatype.number(2) === 0 ? 0 : random.arrayElement(db.sales).id,
      created_at: randomDate().toISOString(),
      description: seed.description,
      revenue: random.arrayElement(["$1M", "$10M", "$100M"]),
      tax_identifier: `30-${datatype.number({ min: 50000000, max: 71999999 })}-${datatype.number(9)}`,
      country: "Argentina",
      context_links: [],
    };
  });
};
