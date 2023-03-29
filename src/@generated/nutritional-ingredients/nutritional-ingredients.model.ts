import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { NutritionalIngredientsMaterial } from '../nutritional-ingredients-material/nutritional-ingredients-material.model';
import { NutritionalIngredientsCount } from './nutritional-ingredients-count.output';

@ObjectType()
export class NutritionalIngredients {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [NutritionalIngredientsMaterial], {nullable:true})
    NutritionalIngredientsMaterial?: Array<NutritionalIngredientsMaterial>;

    @Field(() => NutritionalIngredientsCount, {nullable:false})
    _count?: NutritionalIngredientsCount;
}
