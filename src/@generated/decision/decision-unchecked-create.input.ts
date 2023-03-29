import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReasonUncheckedCreateNestedManyWithoutDecisionInput } from '../reason/reason-unchecked-create-nested-many-without-decision.input';

@InputType()
export class DecisionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => ReasonUncheckedCreateNestedManyWithoutDecisionInput, {nullable:true})
    Reason?: ReasonUncheckedCreateNestedManyWithoutDecisionInput;
}
