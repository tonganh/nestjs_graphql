import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecisionWhereInput } from './decision-where.input';

@InputType()
export class DecisionRelationFilter {

    @Field(() => DecisionWhereInput, {nullable:true})
    is?: DecisionWhereInput;

    @Field(() => DecisionWhereInput, {nullable:true})
    isNot?: DecisionWhereInput;
}
