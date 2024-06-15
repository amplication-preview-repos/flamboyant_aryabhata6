import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserLastStateServiceBase } from "./base/userLastState.service.base";

@Injectable()
export class UserLastStateService extends UserLastStateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
