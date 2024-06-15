import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserLastStateResolverBase } from "./base/userLastState.resolver.base";
import { UserLastState } from "./base/UserLastState";
import { UserLastStateService } from "./userLastState.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserLastState)
export class UserLastStateResolver extends UserLastStateResolverBase {
  constructor(
    protected readonly service: UserLastStateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
