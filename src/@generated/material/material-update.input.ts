import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NutritionalIngredientsMaterialUpdateManyWithoutMateriaNestedInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-update-many-without-materia-nested.input';
import { DishMateriaUpdateManyWithoutMaterialNestedInput } from '../dish-materia/dish-materia-update-many-without-material-nested.input';

@InputType()
export class MaterialUpdateInput {

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

    @Field(() => NutritionalIngredientsMaterialUpdateManyWithoutMateriaNestedInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUpdateManyWithoutMateriaNestedInput;

    @Field(() => DishMateriaUpdateManyWithoutMaterialNestedInput, {nullable:true})
    DishMateria?: DishMateriaUpdateManyWithoutMaterialNestedInput;
}
