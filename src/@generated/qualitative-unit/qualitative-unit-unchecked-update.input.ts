import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NutritionalIngredientsMaterialUncheckedUpdateManyWithoutQualitativeUnitNestedInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-unchecked-update-many-without-qualitative-unit-nested.input';

@InputType()
export class QualitativeUnitUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    symbol?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NutritionalIngredientsMaterialUncheckedUpdateManyWithoutQualitativeUnitNestedInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUncheckedUpdateManyWithoutQualitativeUnitNestedInput;
}
