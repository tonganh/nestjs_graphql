import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NutritionalIngredientsMaterialUncheckedUpdateManyWithoutMateriaNestedInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-unchecked-update-many-without-materia-nested.input';
import { DishMateriaUncheckedUpdateManyWithoutMaterialNestedInput } from '../dish-materia/dish-materia-unchecked-update-many-without-material-nested.input';

@InputType()
export class MaterialUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imgUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NutritionalIngredientsMaterialUncheckedUpdateManyWithoutMateriaNestedInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUncheckedUpdateManyWithoutMateriaNestedInput;

    @Field(() => DishMateriaUncheckedUpdateManyWithoutMaterialNestedInput, {nullable:true})
    DishMateria?: DishMateriaUncheckedUpdateManyWithoutMaterialNestedInput;
}
