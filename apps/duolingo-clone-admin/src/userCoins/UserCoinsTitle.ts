import { UserCoins as TUserCoins } from "../api/userCoins/UserCoins";

export const USERCOINS_TITLE_FIELD = "id";

export const UserCoinsTitle = (record: TUserCoins): string => {
  return record.id?.toString() || String(record.id);
};
