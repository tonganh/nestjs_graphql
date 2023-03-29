import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DecisionWhereInput } from './decision-where.input';
import { Type } from 'class-transformer';
import { DecisionOrderByWithAggregationInput } from './decision-order-by-with-aggregation.input';
import { DecisionScalarFieldEnum } from './decision-scalar-field.enum';
import { DecisionScalarWhereWithAggregatesInput } from './decision-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DecisionCountAggregateInput } from './decision-count-aggregate.input';
import { DecisionAvgAggregateInput } from './decision-avg-aggregate.input';
import { DecisionSumAggregateInput } from './decision-sum-aggregate.input';
import { DecisionMinAggregateInput } from './decision-min-aggregate.input';
import { DecisionMaxAggregateInput } from './decision-max-aggregate.input';

@ArgsType()
export class DecisionGroupByArgs {

    @Field(() => DecisionWhereInput, {nullable:true})
    @Type(() => DecisionWhereInput)
    where?: DecisionWhereInput;

    @Field(() => [DecisionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DecisionOrderByWithAggregationInput>;

    @Field(() => [DecisionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DecisionScalarFieldEnum>;

    @Field(() => DecisionScalarWhereWithAggregatesInput, {nullable:true})
    having?: DecisionScalarWhereWithAggregatesInput;

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
