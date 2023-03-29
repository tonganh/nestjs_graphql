import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class NutritionalIngredientsMaterialUncheckedUpdateWithoutMateriaInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    nutritionalIngredientsId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    qualitativeUnitId?: IntFieldUpdateOperationsInput;
}
