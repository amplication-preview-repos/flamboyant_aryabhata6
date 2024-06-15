import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserCoinsModuleBase } from "./base/userCoins.module.base";
import { UserCoinsService } from "./userCoins.service";
import { UserCoinsController } from "./userCoins.controller";
import { UserCoinsResolver } from "./userCoins.resolver";

@Module({
  imports: [UserCoinsModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserCoinsController],
  providers: [UserCoinsService, UserCoinsResolver],
  exports: [UserCoinsService],
})
export class UserCoinsModule {}
