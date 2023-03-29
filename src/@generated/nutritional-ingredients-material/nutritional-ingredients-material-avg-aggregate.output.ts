import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NutritionalIngredientsMaterialAvgAggregate {

    @Field(() => Float, {nullable:true})
    nutritionalIngredientsId?: number;

    @Field(() => Float, {nullable:true})
    materialId?: number;

    @Field(() => Float, {nullable:true})
    qualitativeUnitId?: number;
}
