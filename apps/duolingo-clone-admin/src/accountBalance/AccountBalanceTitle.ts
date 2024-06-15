import { AccountBalance as TAccountBalance } from "../api/accountBalance/AccountBalance";

export const ACCOUNTBALANCE_TITLE_FIELD = "id";

export const AccountBalanceTitle = (record: TAccountBalance): string => {
  return record.id?.toString() || String(record.id);
};
