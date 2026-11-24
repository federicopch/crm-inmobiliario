import type { Db } from "./types";
import { tagSeeds } from "./realEstateData";

export const generateTags = (_: Db) => {
  return tagSeeds.map((tag) => ({ ...tag }));
};
