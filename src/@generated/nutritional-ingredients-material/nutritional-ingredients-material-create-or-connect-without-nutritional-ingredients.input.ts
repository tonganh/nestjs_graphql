import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-create-without-nutritional-ingredients.input';

@InputType()
export class NutritionalIngredientsMaterialCreateOrConnectWithoutNutritionalIngredientsInput {

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;

    @Field(() => NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput)
    create!: NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput;
}
