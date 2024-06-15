import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountBalanceService } from "./accountBalance.service";
import { AccountBalanceControllerBase } from "./base/accountBalance.controller.base";

@swagger.ApiTags("accountBalances")
@common.Controller("accountBalances")
export class AccountBalanceController extends AccountBalanceControllerBase {
  constructor(
    protected readonly service: AccountBalanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
