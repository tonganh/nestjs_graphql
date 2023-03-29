import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialUpdateWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-update-without-nutritional-ingredients.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutNutritionalIngredientsInput {

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;

    @Field(() => NutritionalIngredientsMaterialUpdateWithoutNutritionalIngredientsInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUpdateWithoutNutritionalIngredientsInput)
    data!: NutritionalIngredientsMaterialUpdateWithoutNutritionalIngredientsInput;
}
