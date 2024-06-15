import { StateOfPurchasesWhereInput } from "./StateOfPurchasesWhereInput";
import { StateOfPurchasesOrderByInput } from "./StateOfPurchasesOrderByInput";

export type StateOfPurchasesFindManyArgs = {
  where?: StateOfPurchasesWhereInput;
  orderBy?: Array<StateOfPurchasesOrderByInput>;
  skip?: number;
  take?: number;
};
