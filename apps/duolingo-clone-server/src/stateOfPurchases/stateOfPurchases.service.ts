import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StateOfPurchasesServiceBase } from "./base/stateOfPurchases.service.base";

@Injectable()
export class StateOfPurchasesService extends StateOfPurchasesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
