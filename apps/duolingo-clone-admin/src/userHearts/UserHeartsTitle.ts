import { UserHearts as TUserHearts } from "../api/userHearts/UserHearts";

export const USERHEARTS_TITLE_FIELD = "id";

export const UserHeartsTitle = (record: TUserHearts): string => {
  return record.id?.toString() || String(record.id);
};
