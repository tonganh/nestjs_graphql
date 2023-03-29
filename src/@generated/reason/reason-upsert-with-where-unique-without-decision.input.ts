import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReasonWhereUniqueInput } from './reason-where-unique.input';
import { Type } from 'class-transformer';
import { ReasonUpdateWithoutDecisionInput } from './reason-update-without-decision.input';
import { ReasonCreateWithoutDecisionInput } from './reason-create-without-decision.input';

@InputType()
export class ReasonUpsertWithWhereUniqueWithoutDecisionInput {

    @Field(() => ReasonWhereUniqueInput, {nullable:false})
    @Type(() => ReasonWhereUniqueInput)
    where!: ReasonWhereUniqueInput;

    @Field(() => ReasonUpdateWithoutDecisionInput, {nullable:false})
    @Type(() => ReasonUpdateWithoutDecisionInput)
    update!: ReasonUpdateWithoutDecisionInput;

    @Field(() => ReasonCreateWithoutDecisionInput, {nullable:false})
    @Type(() => ReasonCreateWithoutDecisionInput)
    create!: ReasonCreateWithoutDecisionInput;
}
