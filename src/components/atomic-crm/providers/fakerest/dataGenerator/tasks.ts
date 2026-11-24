import { datatype, random } from "faker/locale/en_US";

import { defaultTaskTypes } from "../../../root/defaultConfiguration";
import type { Task } from "../../../types";
import type { Db } from "./types";
import { randomDate } from "./utils";
import { taskTexts } from "./realEstateData";

export const type: string[] = [
  "email",
  "email",
  "email",
  "email",
  "email",
  "email",
  "call",
  "call",
  "call",
  "call",
  "call",
  "call",
  "call",
  "call",
  "call",
  "call",
  "call",
  "demo",
  "lunch",
  "meeting",
  "follow-up",
  "follow-up",
  "thank-you",
  "ship",
  "none",
];

export const generateTasks = (db: Db) => {
  return Array.from(Array(180).keys()).map<Task>((id) => {
    const contact = random.arrayElement(db.contacts);
    contact.nb_tasks = (contact.nb_tasks ?? 0) + 1;
    const type = random.arrayElement(defaultTaskTypes).value;
    return {
      id,
      contact_id: contact.id,
      type,
      text: random.arrayElement(taskTexts[type] ?? taskTexts.none),
      due_date: randomDate(
        datatype.boolean() ? new Date() : new Date(contact.first_seen),
        new Date(Date.now() + 100 * 24 * 60 * 60 * 1000),
      ).toISOString(),
      done_date: undefined,
      sales_id: 0,
      created_at: randomDate(new Date(contact.first_seen)).toISOString(),
    };
  });
};
