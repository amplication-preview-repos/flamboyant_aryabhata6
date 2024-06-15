import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StateOfPurchasesModuleBase } from "./base/stateOfPurchases.module.base";
import { StateOfPurchasesService } from "./stateOfPurchases.service";
import { StateOfPurchasesController } from "./stateOfPurchases.controller";
import { StateOfPurchasesResolver } from "./stateOfPurchases.resolver";

@Module({
  imports: [StateOfPurchasesModuleBase, forwardRef(() => AuthModule)],
  controllers: [StateOfPurchasesController],
  providers: [StateOfPurchasesService, StateOfPurchasesResolver],
  exports: [StateOfPurchasesService],
})
export class StateOfPurchasesModule {}
