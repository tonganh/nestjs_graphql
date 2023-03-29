import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereInput } from './nutritional-ingredients-material-where.input';

@InputType()
export class NutritionalIngredientsMaterialListRelationFilter {

    @Field(() => NutritionalIngredientsMaterialWhereInput, {nullable:true})
    every?: NutritionalIngredientsMaterialWhereInput;

    @Field(() => NutritionalIngredientsMaterialWhereInput, {nullable:true})
    some?: NutritionalIngredientsMaterialWhereInput;

    @Field(() => NutritionalIngredientsMaterialWhereInput, {nullable:true})
    none?: NutritionalIngredientsMaterialWhereInput;
}
