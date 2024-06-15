import { UserCoinsWhereInput } from "./UserCoinsWhereInput";
import { UserCoinsOrderByInput } from "./UserCoinsOrderByInput";

export type UserCoinsFindManyArgs = {
  where?: UserCoinsWhereInput;
  orderBy?: Array<UserCoinsOrderByInput>;
  skip?: number;
  take?: number;
};
