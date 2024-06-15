import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserCoinsServiceBase } from "./base/userCoins.service.base";

@Injectable()
export class UserCoinsService extends UserCoinsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
