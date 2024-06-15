import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StateOfPurchasesService } from "./stateOfPurchases.service";
import { StateOfPurchasesControllerBase } from "./base/stateOfPurchases.controller.base";

@swagger.ApiTags("stateOfPurchases")
@common.Controller("stateOfPurchases")
export class StateOfPurchasesController extends StateOfPurchasesControllerBase {
  constructor(
    protected readonly service: StateOfPurchasesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
