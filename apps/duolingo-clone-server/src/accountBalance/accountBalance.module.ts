import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountBalanceModuleBase } from "./base/accountBalance.module.base";
import { AccountBalanceService } from "./accountBalance.service";
import { AccountBalanceController } from "./accountBalance.controller";
import { AccountBalanceResolver } from "./accountBalance.resolver";

@Module({
  imports: [AccountBalanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountBalanceController],
  providers: [AccountBalanceService, AccountBalanceResolver],
  exports: [AccountBalanceService],
})
export class AccountBalanceModule {}
