/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  StateOfPurchases as PrismaStateOfPurchases,
} from "@prisma/client";

export class StateOfPurchasesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.StateOfPurchasesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.stateOfPurchases.count(args);
  }

  async stateOfPurchasesItems<T extends Prisma.StateOfPurchasesFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StateOfPurchasesFindManyArgs>
  ): Promise<PrismaStateOfPurchases[]> {
    return this.prisma.stateOfPurchases.findMany<Prisma.StateOfPurchasesFindManyArgs>(
      args
    );
  }
  async stateOfPurchases<T extends Prisma.StateOfPurchasesFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StateOfPurchasesFindUniqueArgs>
  ): Promise<PrismaStateOfPurchases | null> {
    return this.prisma.stateOfPurchases.findUnique(args);
  }
  async createStateOfPurchases<T extends Prisma.StateOfPurchasesCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StateOfPurchasesCreateArgs>
  ): Promise<PrismaStateOfPurchases> {
    return this.prisma.stateOfPurchases.create<T>(args);
  }
  async updateStateOfPurchases<T extends Prisma.StateOfPurchasesUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StateOfPurchasesUpdateArgs>
  ): Promise<PrismaStateOfPurchases> {
    return this.prisma.stateOfPurchases.update<T>(args);
  }
  async deleteStateOfPurchases<T extends Prisma.StateOfPurchasesDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StateOfPurchasesDeleteArgs>
  ): Promise<PrismaStateOfPurchases> {
    return this.prisma.stateOfPurchases.delete(args);
  }
}