import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DecisionWhereUniqueInput } from './decision-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDecisionOrThrowArgs {

    @Field(() => DecisionWhereUniqueInput, {nullable:false})
    @Type(() => DecisionWhereUniqueInput)
    where!: DecisionWhereUniqueInput;
}
