/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoadmapWhereInput } from "./RoadmapWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RoadmapCountArgs {
  @ApiProperty({
    required: false,
    type: () => RoadmapWhereInput,
  })
  @Field(() => RoadmapWhereInput, { nullable: true })
  @Type(() => RoadmapWhereInput)
  where?: RoadmapWhereInput;
}

export { RoadmapCountArgs as RoadmapCountArgs };
