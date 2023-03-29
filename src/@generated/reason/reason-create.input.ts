import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecisionCreateNestedOneWithoutReasonInput } from '../decision/decision-create-nested-one-without-reason.input';

@InputType()
export class ReasonCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => DecisionCreateNestedOneWithoutReasonInput, {nullable:false})
    decision!: DecisionCreateNestedOneWithoutReasonInput;
}
