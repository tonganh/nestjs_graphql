import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NutritionalIngredientsMaterialUpdateManyWithoutMateriaNestedInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-update-many-without-materia-nested.input';

@InputType()
export class MaterialUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imgUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NutritionalIngredientsMaterialUpdateManyWithoutMateriaNestedInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUpdateManyWithoutMateriaNestedInput;
}
