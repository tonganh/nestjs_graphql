import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NutritionalIngredientsMaterialCountAggregate {

    @Field(() => Int, {nullable:false})
    nutritionalIngredientsId!: number;

    @Field(() => Int, {nullable:false})
    materialId!: number;

    @Field(() => Int, {nullable:false})
    qualitativeUnitId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
