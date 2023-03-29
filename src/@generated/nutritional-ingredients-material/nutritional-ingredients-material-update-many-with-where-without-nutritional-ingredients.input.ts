import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialScalarWhereInput } from './nutritional-ingredients-material-scalar-where.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialUncheckedUpdateManyWithoutNutritionalIngredientsMaterialInput } from './nutritional-ingredients-material-unchecked-update-many-without-nutritional-ingredients-material.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateManyWithWhereWithoutNutritionalIngredientsInput {

    @Field(() => NutritionalIngredientsMaterialScalarWhereInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialScalarWhereInput)
    where!: NutritionalIngredientsMaterialScalarWhereInput;

    @Field(() => NutritionalIngredientsMaterialUncheckedUpdateManyWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUncheckedUpdateManyWithoutNutritionalIngredientsMaterialInput)
    data!: NutritionalIngredientsMaterialUncheckedUpdateManyWithoutNutritionalIngredientsMaterialInput;
}
