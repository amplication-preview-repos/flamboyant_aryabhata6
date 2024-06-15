import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserLastStateService } from "./userLastState.service";
import { UserLastStateControllerBase } from "./base/userLastState.controller.base";

@swagger.ApiTags("userLastStates")
@common.Controller("userLastStates")
export class UserLastStateController extends UserLastStateControllerBase {
  constructor(
    protected readonly service: UserLastStateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
