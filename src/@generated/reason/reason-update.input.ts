import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DecisionUpdateOneRequiredWithoutReasonNestedInput } from '../decision/decision-update-one-required-without-reason-nested.input';

@InputType()
export class ReasonUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DecisionUpdateOneRequiredWithoutReasonNestedInput, {nullable:true})
    decision?: DecisionUpdateOneRequiredWithoutReasonNestedInput;
}
