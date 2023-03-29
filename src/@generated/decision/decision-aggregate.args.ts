import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DecisionWhereInput } from './decision-where.input';
import { Type } from 'class-transformer';
import { DecisionOrderByWithRelationInput } from './decision-order-by-with-relation.input';
import { DecisionWhereUniqueInput } from './decision-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DecisionCountAggregateInput } from './decision-count-aggregate.input';
import { DecisionAvgAggregateInput } from './decision-avg-aggregate.input';
import { DecisionSumAggregateInput } from './decision-sum-aggregate.input';
import { DecisionMinAggregateInput } from './decision-min-aggregate.input';
import { DecisionMaxAggregateInput } from './decision-max-aggregate.input';

@ArgsType()
export class DecisionAggregateArgs {

    @Field(() => DecisionWhereInput, {nullable:true})
    @Type(() => DecisionWhereInput)
    where?: DecisionWhereInput;

    @Field(() => [DecisionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DecisionOrderByWithRelationInput>;

    @Field(() => DecisionWhereUniqueInput, {nullable:true})
    cursor?: DecisionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DecisionCountAggregateInput, {nullable:true})
    _count?: DecisionCountAggregateInput;

    @Field(() => DecisionAvgAggregateInput, {nullable:true})
    _avg?: DecisionAvgAggregateInput;

    @Field(() => DecisionSumAggregateInput, {nullable:true})
    _sum?: DecisionSumAggregateInput;

    @Field(() => DecisionMinAggregateInput, {nullable:true})
    _min?: DecisionMinAggregateInput;

    @Field(() => DecisionMaxAggregateInput, {nullable:true})
    _max?: DecisionMaxAggregateInput;
}
