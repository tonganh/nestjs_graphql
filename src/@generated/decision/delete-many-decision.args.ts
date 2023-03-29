import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DecisionWhereInput } from './decision-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDecisionArgs {

    @Field(() => DecisionWhereInput, {nullable:true})
    @Type(() => DecisionWhereInput)
    where?: DecisionWhereInput;
}
