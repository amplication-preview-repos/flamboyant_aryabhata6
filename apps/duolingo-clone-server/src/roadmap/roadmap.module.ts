import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RoadmapModuleBase } from "./base/roadmap.module.base";
import { RoadmapService } from "./roadmap.service";
import { RoadmapController } from "./roadmap.controller";
import { RoadmapResolver } from "./roadmap.resolver";

@Module({
  imports: [RoadmapModuleBase, forwardRef(() => AuthModule)],
  controllers: [RoadmapController],
  providers: [RoadmapService, RoadmapResolver],
  exports: [RoadmapService],
})
export class RoadmapModule {}
