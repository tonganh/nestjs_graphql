import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput } from './nutritional-ingredients-create-without-nutritional-ingredients-material.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsCreateOrConnectWithoutNutritionalIngredientsMaterialInput } from './nutritional-ingredients-create-or-connect-without-nutritional-ingredients-material.input';
import { NutritionalIngredientsWhereUniqueInput } from './nutritional-ingredients-where-unique.input';

@InputType()
export class NutritionalIngredientsCreateNestedOneWithoutNutritionalIngredientsMaterialInput {

    @Field(() => NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput)
    create?: NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput;

    @Field(() => NutritionalIngredientsCreateOrConnectWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => NutritionalIngredientsCreateOrConnectWithoutNutritionalIngredientsMaterialInput)
    connectOrCreate?: NutritionalIngredientsCreateOrConnectWithoutNutritionalIngredientsMaterialInput;

    @Field(() => NutritionalIngredientsWhereUniqueInput, {nullable:true})
    @Type(() => NutritionalIngredientsWhereUniqueInput)
    connect?: NutritionalIngredientsWhereUniqueInput;
}
