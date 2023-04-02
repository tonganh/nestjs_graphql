import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { MaterialUpdateOneRequiredWithoutDishMateriaNestedInput } from '../material/material-update-one-required-without-dish-materia-nested.input';
import { DishUpdateOneRequiredWithoutDishMateriaNestedInput } from '../dish/dish-update-one-required-without-dish-materia-nested.input';

@InputType()
export class DishMateriaUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    amountText?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => MaterialUpdateOneRequiredWithoutDishMateriaNestedInput, {nullable:true})
    material?: MaterialUpdateOneRequiredWithoutDishMateriaNestedInput;

    @Field(() => DishUpdateOneRequiredWithoutDishMateriaNestedInput, {nullable:true})
    dish?: DishUpdateOneRequiredWithoutDishMateriaNestedInput;
}
