import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserLastStateModuleBase } from "./base/userLastState.module.base";
import { UserLastStateService } from "./userLastState.service";
import { UserLastStateController } from "./userLastState.controller";
import { UserLastStateResolver } from "./userLastState.resolver";

@Module({
  imports: [UserLastStateModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserLastStateController],
  providers: [UserLastStateService, UserLastStateResolver],
  exports: [UserLastStateService],
})
export class UserLastStateModule {}
