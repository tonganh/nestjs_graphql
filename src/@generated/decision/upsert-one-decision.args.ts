import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DecisionWhereUniqueInput } from './decision-where-unique.input';
import { Type } from 'class-transformer';
import { DecisionCreateInput } from './decision-create.input';
import { DecisionUpdateInput } from './decision-update.input';

@ArgsType()
export class UpsertOneDecisionArgs {

    @Field(() => DecisionWhereUniqueInput, {nullable:false})
    @Type(() => DecisionWhereUniqueInput)
    where!: DecisionWhereUniqueInput;

    @Field(() => DecisionCreateInput, {nullable:false})
    @Type(() => DecisionCreateInput)
    create!: DecisionCreateInput;

    @Field(() => DecisionUpdateInput, {nullable:false})
    @Type(() => DecisionUpdateInput)
    update!: DecisionUpdateInput;
}
