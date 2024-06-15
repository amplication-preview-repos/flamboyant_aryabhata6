import { UserHeartsWhereInput } from "./UserHeartsWhereInput";
import { UserHeartsOrderByInput } from "./UserHeartsOrderByInput";

export type UserHeartsFindManyArgs = {
  where?: UserHeartsWhereInput;
  orderBy?: Array<UserHeartsOrderByInput>;
  skip?: number;
  take?: number;
};
