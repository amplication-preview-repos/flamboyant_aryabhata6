import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserCoinsResolverBase } from "./base/userCoins.resolver.base";
import { UserCoins } from "./base/UserCoins";
import { UserCoinsService } from "./userCoins.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserCoins)
export class UserCoinsResolver extends UserCoinsResolverBase {
  constructor(
    protected readonly service: UserCoinsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
