import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsWhereUniqueInput } from './nutritional-ingredients-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput } from './nutritional-ingredients-create-without-nutritional-ingredients-material.input';

@InputType()
export class NutritionalIngredientsCreateOrConnectWithoutNutritionalIngredientsMaterialInput {

    @Field(() => NutritionalIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsWhereUniqueInput)
    where!: NutritionalIngredientsWhereUniqueInput;

    @Field(() => NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    @Type(() => NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput)
    create!: NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput;
}
