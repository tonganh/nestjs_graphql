import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NutritionalIngredientsCount {

    @Field(() => Int, {nullable:false})
    NutritionalIngredientsMaterial?: number;
}
