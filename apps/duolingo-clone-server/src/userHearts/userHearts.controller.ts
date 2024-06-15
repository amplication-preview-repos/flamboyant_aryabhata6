import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserHeartsService } from "./userHearts.service";
import { UserHeartsControllerBase } from "./base/userHearts.controller.base";

@swagger.ApiTags("userHearts")
@common.Controller("userHearts")
export class UserHeartsController extends UserHeartsControllerBase {
  constructor(
    protected readonly service: UserHeartsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
