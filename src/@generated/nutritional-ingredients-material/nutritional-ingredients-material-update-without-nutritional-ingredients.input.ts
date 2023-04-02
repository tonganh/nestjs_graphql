import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../material/material-update-one-required-without-nutritional-ingredients-material-nested.input';
import { QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput } from '../qualitative-unit/qualitative-unit-update-one-required-without-nutritional-ingredients-material-nested.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateWithoutNutritionalIngredientsInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    materia?: MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;

    @Field(() => QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput, {nullable:true})
    qualitativeUnit?: QualitativeUnitUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput;
}
