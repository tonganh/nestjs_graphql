import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateNestedOneWithoutNutritionalIngredientsMaterialInput } from '../material/material-create-nested-one-without-nutritional-ingredients-material.input';
import { QualitativeUnitCreateNestedOneWithoutNutritionalIngredientsMaterialInput } from '../qualitative-unit/qualitative-unit-create-nested-one-without-nutritional-ingredients-material.input';

@InputType()
export class NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => MaterialCreateNestedOneWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    materia!: MaterialCreateNestedOneWithoutNutritionalIngredientsMaterialInput;

    @Field(() => QualitativeUnitCreateNestedOneWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    qualitativeUnit!: QualitativeUnitCreateNestedOneWithoutNutritionalIngredientsMaterialInput;
}
