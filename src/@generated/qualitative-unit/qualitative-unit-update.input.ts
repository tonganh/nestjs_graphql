import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NutritionalIngredientsMaterialUpdateManyWithoutQualitativeUnitNestedInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-update-many-without-qualitative-unit-nested.input';

@InputType()
export class QualitativeUnitUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    symbol?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NutritionalIngredientsMaterialUpdateManyWithoutQualitativeUnitNestedInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUpdateManyWithoutQualitativeUnitNestedInput;
}
