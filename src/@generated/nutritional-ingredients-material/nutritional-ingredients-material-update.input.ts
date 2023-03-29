import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../nutritional-ingredients/nutritional-ingredients-update-one-required-without-nutritional-ingredients-material-nested.input';
import { MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../material/material-update-one-required-without-nutritional-ingredients-material-nested.input';
import { QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../qualitative-unit/qualitative-unit-update-one-required-without-nutritional-ingredients-material-nested.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateInput {

    @Field(() => NutritionalIngredientsUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    nutritionalIngredients?: NutritionalIngredientsUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;

    @Field(() => MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    materia?: MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;

    @Field(() => QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    qualitativeUnit?: QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;
}
