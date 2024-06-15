import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserCoinsService } from "./userCoins.service";
import { UserCoinsControllerBase } from "./base/userCoins.controller.base";

@swagger.ApiTags("userCoins")
@common.Controller("userCoins")
export class UserCoinsController extends UserCoinsControllerBase {
  constructor(
    protected readonly service: UserCoinsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
