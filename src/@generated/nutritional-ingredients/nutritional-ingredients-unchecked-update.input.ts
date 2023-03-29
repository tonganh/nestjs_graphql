import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NutritionalIngredientsMaterialUncheckedUpdateManyWithoutNutritionalIngredientsNestedInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-unchecked-update-many-without-nutritional-ingredients-nested.input';

@InputType()
export class NutritionalIngredientsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NutritionalIngredientsMaterialUncheckedUpdateManyWithoutNutritionalIngredientsNestedInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUncheckedUpdateManyWithoutNutritionalIngredientsNestedInput;
}
