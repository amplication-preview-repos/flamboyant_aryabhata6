import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountBalanceServiceBase } from "./base/accountBalance.service.base";

@Injectable()
export class AccountBalanceService extends AccountBalanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
