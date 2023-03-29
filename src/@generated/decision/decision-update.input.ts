import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ReasonUpdateManyWithoutDecisionNestedInput } from '../reason/reason-update-many-without-decision-nested.input';

@InputType()
export class DecisionUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ReasonUpdateManyWithoutDecisionNestedInput, {nullable:true})
    Reason?: ReasonUpdateManyWithoutDecisionNestedInput;
}
