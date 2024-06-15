import { UserLastState as TUserLastState } from "../api/userLastState/UserLastState";

export const USERLASTSTATE_TITLE_FIELD = "id";

export const UserLastStateTitle = (record: TUserLastState): string => {
  return record.id?.toString() || String(record.id);
};
