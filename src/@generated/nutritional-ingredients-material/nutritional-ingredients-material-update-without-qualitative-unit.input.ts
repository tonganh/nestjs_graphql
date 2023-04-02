import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NutritionalIngredientsUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../nutritional-ingredients/nutritional-ingredients-update-one-required-without-nutritional-ingredients-material-nested.input';
import { MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../material/material-update-one-required-without-nutritional-ingredients-material-nested.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateWithoutQualitativeUnitInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NutritionalIngredientsUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    nutritionalIngredients?: NutritionalIngredientsUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;

    @Field(() => MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    materia?: MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;
}
