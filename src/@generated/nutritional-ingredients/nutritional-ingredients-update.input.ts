import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NutritionalIngredientsMaterialUpdateManyWithoutNutritionalIngredientsNestedInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-update-many-without-nutritional-ingredients-nested.input';

@InputType()
export class NutritionalIngredientsUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NutritionalIngredientsMaterialUpdateManyWithoutNutritionalIngredientsNestedInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUpdateManyWithoutNutritionalIngredientsNestedInput;
}
