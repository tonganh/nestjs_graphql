import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class NutritionalIngredientsMaterialUncheckedUpdateManyWithoutNutritionalIngredientsMaterialInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    materialId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    qualitativeUnitId?: IntFieldUpdateOperationsInput;
}
