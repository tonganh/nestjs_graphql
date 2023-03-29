import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecisionWhereUniqueInput } from './decision-where-unique.input';
import { Type } from 'class-transformer';
import { DecisionCreateWithoutReasonInput } from './decision-create-without-reason.input';

@InputType()
export class DecisionCreateOrConnectWithoutReasonInput {

    @Field(() => DecisionWhereUniqueInput, {nullable:false})
    @Type(() => DecisionWhereUniqueInput)
    where!: DecisionWhereUniqueInput;

    @Field(() => DecisionCreateWithoutReasonInput, {nullable:false})
    @Type(() => DecisionCreateWithoutReasonInput)
    create!: DecisionCreateWithoutReasonInput;
}
