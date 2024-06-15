import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserHeartsServiceBase } from "./base/userHearts.service.base";

@Injectable()
export class UserHeartsService extends UserHeartsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
