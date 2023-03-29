import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DecisionUpdateManyMutationInput } from './decision-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DecisionWhereInput } from './decision-where.input';

@ArgsType()
export class UpdateManyDecisionArgs {

    @Field(() => DecisionUpdateManyMutationInput, {nullable:false})
    @Type(() => DecisionUpdateManyMutationInput)
    data!: DecisionUpdateManyMutationInput;

    @Field(() => DecisionWhereInput, {nullable:true})
    @Type(() => DecisionWhereInput)
    where?: DecisionWhereInput;
}
