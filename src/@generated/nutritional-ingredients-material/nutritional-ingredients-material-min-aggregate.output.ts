import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NutritionalIngredientsMaterialMinAggregate {

    @Field(() => Int, {nullable:true})
    nutritionalIngredientsId?: number;

    @Field(() => Int, {nullable:true})
    materialId?: number;

    @Field(() => Int, {nullable:true})
    qualitativeUnitId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
