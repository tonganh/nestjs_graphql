import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NutritionalIngredientsMaterialSumAggregate {

    @Field(() => Int, {nullable:true})
    nutritionalIngredientsId?: number;

    @Field(() => Int, {nullable:true})
    materialId?: number;

    @Field(() => Int, {nullable:true})
    qualitativeUnitId?: number;
}
