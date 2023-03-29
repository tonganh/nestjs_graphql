import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsUpdateWithoutNutritionalIngredientsMaterialInput } from './nutritional-ingredients-update-without-nutritional-ingredients-material.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput } from './nutritional-ingredients-create-without-nutritional-ingredients-material.input';

@InputType()
export class NutritionalIngredientsUpsertWithoutNutritionalIngredientsMaterialInput {

    @Field(() => NutritionalIngredientsUpdateWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    @Type(() => NutritionalIngredientsUpdateWithoutNutritionalIngredientsMaterialInput)
    update!: NutritionalIngredientsUpdateWithoutNutritionalIngredientsMaterialInput;

    @Field(() => NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    @Type(() => NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput)
    create!: NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput;
}
