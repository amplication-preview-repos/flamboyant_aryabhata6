/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StateOfPurchasesWhereInput } from "./StateOfPurchasesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StateOfPurchasesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StateOfPurchasesWhereInput,
  })
  @ValidateNested()
  @Type(() => StateOfPurchasesWhereInput)
  @IsOptional()
  @Field(() => StateOfPurchasesWhereInput, {
    nullable: true,
  })
  every?: StateOfPurchasesWhereInput;

  @ApiProperty({
    required: false,
    type: () => StateOfPurchasesWhereInput,
  })
  @ValidateNested()
  @Type(() => StateOfPurchasesWhereInput)
  @IsOptional()
  @Field(() => StateOfPurchasesWhereInput, {
    nullable: true,
  })
  some?: StateOfPurchasesWhereInput;

  @ApiProperty({
    required: false,
    type: () => StateOfPurchasesWhereInput,
  })
  @ValidateNested()
  @Type(() => StateOfPurchasesWhereInput)
  @IsOptional()
  @Field(() => StateOfPurchasesWhereInput, {
    nullable: true,
  })
  none?: StateOfPurchasesWhereInput;
}
export { StateOfPurchasesListRelationFilter as StateOfPurchasesListRelationFilter };
