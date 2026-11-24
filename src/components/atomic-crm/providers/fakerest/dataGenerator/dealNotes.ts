import { random } from "faker/locale/en_US";

import type { Db } from "./types";
import { randomDate } from "./utils";
import { dealNoteTexts } from "./realEstateData";

export const generateDealNotes = (db: Db) => {
  return Array.from(Array(150).keys()).map((id) => {
    const deal = random.arrayElement(db.deals);
    return {
      id,
      deal_id: deal.id,
      text: random.arrayElement(dealNoteTexts),
      date: randomDate(
        new Date(db.deals[deal.id as number].created_at),
      ).toISOString(),
      sales_id: deal.sales_id,
    };
  });
};
