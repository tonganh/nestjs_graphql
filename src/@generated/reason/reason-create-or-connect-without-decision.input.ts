import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReasonWhereUniqueInput } from './reason-where-unique.input';
import { Type } from 'class-transformer';
import { ReasonCreateWithoutDecisionInput } from './reason-create-without-decision.input';

@InputType()
export class ReasonCreateOrConnectWithoutDecisionInput {

    @Field(() => ReasonWhereUniqueInput, {nullable:false})
    @Type(() => ReasonWhereUniqueInput)
    where!: ReasonWhereUniqueInput;

    @Field(() => ReasonCreateWithoutDecisionInput, {nullable:false})
    @Type(() => ReasonCreateWithoutDecisionInput)
    create!: ReasonCreateWithoutDecisionInput;
}
