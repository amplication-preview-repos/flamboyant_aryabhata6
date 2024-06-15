import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RoadmapResolverBase } from "./base/roadmap.resolver.base";
import { Roadmap } from "./base/Roadmap";
import { RoadmapService } from "./roadmap.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Roadmap)
export class RoadmapResolver extends RoadmapResolverBase {
  constructor(
    protected readonly service: RoadmapService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
