import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StateOfPurchasesResolverBase } from "./base/stateOfPurchases.resolver.base";
import { StateOfPurchases } from "./base/StateOfPurchases";
import { StateOfPurchasesService } from "./stateOfPurchases.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StateOfPurchases)
export class StateOfPurchasesResolver extends StateOfPurchasesResolverBase {
  constructor(
    protected readonly service: StateOfPurchasesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
