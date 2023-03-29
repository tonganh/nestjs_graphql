import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../nutritional-ingredients/nutritional-ingredients-update-one-required-without-nutritional-ingredients-material-nested.input';
import { QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../qualitative-unit/qualitative-unit-update-one-required-without-nutritional-ingredients-material-nested.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateWithoutMateriaInput {

    @Field(() => NutritionalIngredientsUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    nutritionalIngredients?: NutritionalIngredientsUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;

    @Field(() => QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    qualitativeUnit?: QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;
}
