import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReasonWhereInput } from './reason-where.input';
import { Type } from 'class-transformer';
import { ReasonOrderByWithAggregationInput } from './reason-order-by-with-aggregation.input';
import { ReasonScalarFieldEnum } from './reason-scalar-field.enum';
import { ReasonScalarWhereWithAggregatesInput } from './reason-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReasonCountAggregateInput } from './reason-count-aggregate.input';
import { ReasonAvgAggregateInput } from './reason-avg-aggregate.input';
import { ReasonSumAggregateInput } from './reason-sum-aggregate.input';
import { ReasonMinAggregateInput } from './reason-min-aggregate.input';
import { ReasonMaxAggregateInput } from './reason-max-aggregate.input';

@ArgsType()
export class ReasonGroupByArgs {

    @Field(() => ReasonWhereInput, {nullable:true})
    @Type(() => ReasonWhereInput)
    where?: ReasonWhereInput;

    @Field(() => [ReasonOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReasonOrderByWithAggregationInput>;

    @Field(() => [ReasonScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReasonScalarFieldEnum>;

    @Field(() => ReasonScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReasonScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReasonCountAggregateInput, {nullable:true})
    _count?: ReasonCountAggregateInput;

    @Field(() => ReasonAvgAggregateInput, {nullable:true})
    _avg?: ReasonAvgAggregateInput;

    @Field(() => ReasonSumAggregateInput, {nullable:true})
    _sum?: ReasonSumAggregateInput;

    @Field(() => ReasonMinAggregateInput, {nullable:true})
    _min?: ReasonMinAggregateInput;

    @Field(() => ReasonMaxAggregateInput, {nullable:true})
    _max?: ReasonMaxAggregateInput;
}
