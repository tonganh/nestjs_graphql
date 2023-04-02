import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsCreateNestedOneWithoutNutritionalIngredientsMaterialInput } from '../nutritional-ingredients/nutritional-ingredients-create-nested-one-without-nutritional-ingredients-material.input';
import { MaterialCreateNestedOneWithoutNutritionalIngredientsMaterialInput } from '../material/material-create-nested-one-without-nutritional-ingredients-material.input';

@InputType()
export class NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => NutritionalIngredientsCreateNestedOneWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    nutritionalIngredients!: NutritionalIngredientsCreateNestedOneWithoutNutritionalIngredientsMaterialInput;

    @Field(() => MaterialCreateNestedOneWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    materia!: MaterialCreateNestedOneWithoutNutritionalIngredientsMaterialInput;
}
