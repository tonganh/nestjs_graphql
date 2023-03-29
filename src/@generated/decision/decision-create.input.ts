import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReasonCreateNestedManyWithoutDecisionInput } from '../reason/reason-create-nested-many-without-decision.input';

@InputType()
export class DecisionCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => ReasonCreateNestedManyWithoutDecisionInput, {nullable:true})
    Reason?: ReasonCreateNestedManyWithoutDecisionInput;
}
