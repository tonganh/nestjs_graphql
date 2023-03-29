import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecisionUpdateWithoutReasonInput } from './decision-update-without-reason.input';
import { Type } from 'class-transformer';
import { DecisionCreateWithoutReasonInput } from './decision-create-without-reason.input';

@InputType()
export class DecisionUpsertWithoutReasonInput {

    @Field(() => DecisionUpdateWithoutReasonInput, {nullable:false})
    @Type(() => DecisionUpdateWithoutReasonInput)
    update!: DecisionUpdateWithoutReasonInput;

    @Field(() => DecisionCreateWithoutReasonInput, {nullable:false})
    @Type(() => DecisionCreateWithoutReasonInput)
    create!: DecisionCreateWithoutReasonInput;
}
