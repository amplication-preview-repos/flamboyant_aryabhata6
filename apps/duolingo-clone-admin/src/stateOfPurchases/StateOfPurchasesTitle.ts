import { StateOfPurchases as TStateOfPurchases } from "../api/stateOfPurchases/StateOfPurchases";

export const STATEOFPURCHASES_TITLE_FIELD = "id";

export const StateOfPurchasesTitle = (record: TStateOfPurchases): string => {
  return record.id?.toString() || String(record.id);
};
