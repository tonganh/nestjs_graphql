import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DecisionUpdateInput } from './decision-update.input';
import { Type } from 'class-transformer';
import { DecisionWhereUniqueInput } from './decision-where-unique.input';

@ArgsType()
export class UpdateOneDecisionArgs {

    @Field(() => DecisionUpdateInput, {nullable:false})
    @Type(() => DecisionUpdateInput)
    data!: DecisionUpdateInput;

    @Field(() => DecisionWhereUniqueInput, {nullable:false})
    @Type(() => DecisionWhereUniqueInput)
    where!: DecisionWhereUniqueInput;
}
