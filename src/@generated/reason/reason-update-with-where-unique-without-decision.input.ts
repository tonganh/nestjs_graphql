import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReasonWhereUniqueInput } from './reason-where-unique.input';
import { Type } from 'class-transformer';
import { ReasonUpdateWithoutDecisionInput } from './reason-update-without-decision.input';

@InputType()
export class ReasonUpdateWithWhereUniqueWithoutDecisionInput {

    @Field(() => ReasonWhereUniqueInput, {nullable:false})
    @Type(() => ReasonWhereUniqueInput)
    where!: ReasonWhereUniqueInput;

    @Field(() => ReasonUpdateWithoutDecisionInput, {nullable:false})
    @Type(() => ReasonUpdateWithoutDecisionInput)
    data!: ReasonUpdateWithoutDecisionInput;
}
