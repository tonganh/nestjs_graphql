import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsCreateNestedOneWithoutNutritionalIngredientsMaterialInput } from '../nutritional-ingredients/nutritional-ingredients-create-nested-one-without-nutritional-ingredients-material.input';
import { QualitativeUnitCreateNestedOneWithoutNutritionalIngredientsMaterialInput } from '../qualitative-unit/qualitative-unit-create-nested-one-without-nutritional-ingredients-material.input';

@InputType()
export class NutritionalIngredientsMaterialCreateWithoutMateriaInput {

    @Field(() => NutritionalIngredientsCreateNestedOneWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    nutritionalIngredients!: NutritionalIngredientsCreateNestedOneWithoutNutritionalIngredientsMaterialInput;

    @Field(() => QualitativeUnitCreateNestedOneWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    qualitativeUnit!: QualitativeUnitCreateNestedOneWithoutNutritionalIngredientsMaterialInput;
}
