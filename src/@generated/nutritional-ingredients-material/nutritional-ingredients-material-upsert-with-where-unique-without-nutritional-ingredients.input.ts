import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialUpdateWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-update-without-nutritional-ingredients.input';
import { NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-create-without-nutritional-ingredients.input';

@InputType()
export class NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutNutritionalIngredientsInput {

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;

    @Field(() => NutritionalIngredientsMaterialUpdateWithoutNutritionalIngredientsInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUpdateWithoutNutritionalIngredientsInput)
    update!: NutritionalIngredientsMaterialUpdateWithoutNutritionalIngredientsInput;

    @Field(() => NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput)
    create!: NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput;
}
