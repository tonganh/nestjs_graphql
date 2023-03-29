import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput } from './nutritional-ingredients-create-without-nutritional-ingredients-material.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsCreateOrConnectWithoutNutritionalIngredientsMaterialInput } from './nutritional-ingredients-create-or-connect-without-nutritional-ingredients-material.input';
import { NutritionalIngredientsUpsertWithoutNutritionalIngredientsMaterialInput } from './nutritional-ingredients-upsert-without-nutritional-ingredients-material.input';
import { NutritionalIngredientsWhereUniqueInput } from './nutritional-ingredients-where-unique.input';
import { NutritionalIngredientsUpdateWithoutNutritionalIngredientsMaterialInput } from './nutritional-ingredients-update-without-nutritional-ingredients-material.input';

@InputType()
export class NutritionalIngredientsUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput {

    @Field(() => NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput)
    create?: NutritionalIngredientsCreateWithoutNutritionalIngredientsMaterialInput;

    @Field(() => NutritionalIngredientsCreateOrConnectWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => NutritionalIngredientsCreateOrConnectWithoutNutritionalIngredientsMaterialInput)
    connectOrCreate?: NutritionalIngredientsCreateOrConnectWithoutNutritionalIngredientsMaterialInput;

    @Field(() => NutritionalIngredientsUpsertWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => NutritionalIngredientsUpsertWithoutNutritionalIngredientsMaterialInput)
    upsert?: NutritionalIngredientsUpsertWithoutNutritionalIngredientsMaterialInput;

    @Field(() => NutritionalIngredientsWhereUniqueInput, {nullable:true})
    @Type(() => NutritionalIngredientsWhereUniqueInput)
    connect?: NutritionalIngredientsWhereUniqueInput;

    @Field(() => NutritionalIngredientsUpdateWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => NutritionalIngredientsUpdateWithoutNutritionalIngredientsMaterialInput)
    update?: NutritionalIngredientsUpdateWithoutNutritionalIngredientsMaterialInput;
}
