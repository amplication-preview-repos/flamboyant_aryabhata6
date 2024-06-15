import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserHeartsModuleBase } from "./base/userHearts.module.base";
import { UserHeartsService } from "./userHearts.service";
import { UserHeartsController } from "./userHearts.controller";
import { UserHeartsResolver } from "./userHearts.resolver";

@Module({
  imports: [UserHeartsModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserHeartsController],
  providers: [UserHeartsService, UserHeartsResolver],
  exports: [UserHeartsService],
})
export class UserHeartsModule {}
