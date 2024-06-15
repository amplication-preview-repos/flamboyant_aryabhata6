import { AccountBalanceWhereInput } from "./AccountBalanceWhereInput";
import { AccountBalanceOrderByInput } from "./AccountBalanceOrderByInput";

export type AccountBalanceFindManyArgs = {
  where?: AccountBalanceWhereInput;
  orderBy?: Array<AccountBalanceOrderByInput>;
  skip?: number;
  take?: number;
};
