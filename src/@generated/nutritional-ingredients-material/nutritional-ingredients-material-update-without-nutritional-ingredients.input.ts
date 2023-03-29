import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../material/material-update-one-required-without-nutritional-ingredients-material-nested.input';
import { QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../qualitative-unit/qualitative-unit-update-one-required-without-nutritional-ingredients-material-nested.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateWithoutNutritionalIngredientsInput {

    @Field(() => MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    materia?: MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;

    @Field(() => QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    qualitativeUnit?: QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;
}
