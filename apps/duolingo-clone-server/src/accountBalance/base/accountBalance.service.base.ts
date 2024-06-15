/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AccountBalance as PrismaAccountBalance } from "@prisma/client";

export class AccountBalanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AccountBalanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.accountBalance.count(args);
  }

  async accountBalances<T extends Prisma.AccountBalanceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountBalanceFindManyArgs>
  ): Promise<PrismaAccountBalance[]> {
    return this.prisma.accountBalance.findMany<Prisma.AccountBalanceFindManyArgs>(
      args
    );
  }
  async accountBalance<T extends Prisma.AccountBalanceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountBalanceFindUniqueArgs>
  ): Promise<PrismaAccountBalance | null> {
    return this.prisma.accountBalance.findUnique(args);
  }
  async createAccountBalance<T extends Prisma.AccountBalanceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountBalanceCreateArgs>
  ): Promise<PrismaAccountBalance> {
    return this.prisma.accountBalance.create<T>(args);
  }
  async updateAccountBalance<T extends Prisma.AccountBalanceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountBalanceUpdateArgs>
  ): Promise<PrismaAccountBalance> {
    return this.prisma.accountBalance.update<T>(args);
  }
  async deleteAccountBalance<T extends Prisma.AccountBalanceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountBalanceDeleteArgs>
  ): Promise<PrismaAccountBalance> {
    return this.prisma.accountBalance.delete(args);
  }
}