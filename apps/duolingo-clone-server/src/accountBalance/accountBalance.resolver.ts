import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccountBalanceResolverBase } from "./base/accountBalance.resolver.base";
import { AccountBalance } from "./base/AccountBalance";
import { AccountBalanceService } from "./accountBalance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountBalance)
export class AccountBalanceResolver extends AccountBalanceResolverBase {
  constructor(
    protected readonly service: AccountBalanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
