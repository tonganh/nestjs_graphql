import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReasonWhereInput } from './reason-where.input';
import { Type } from 'class-transformer';
import { ReasonOrderByWithRelationInput } from './reason-order-by-with-relation.input';
import { ReasonWhereUniqueInput } from './reason-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReasonCountAggregateInput } from './reason-count-aggregate.input';
import { ReasonAvgAggregateInput } from './reason-avg-aggregate.input';
import { ReasonSumAggregateInput } from './reason-sum-aggregate.input';
import { ReasonMinAggregateInput } from './reason-min-aggregate.input';
import { ReasonMaxAggregateInput } from './reason-max-aggregate.input';

@ArgsType()
export class ReasonAggregateArgs {

    @Field(() => ReasonWhereInput, {nullable:true})
    @Type(() => ReasonWhereInput)
    where?: ReasonWhereInput;

    @Field(() => [ReasonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReasonOrderByWithRelationInput>;

    @Field(() => ReasonWhereUniqueInput, {nullable:true})
    cursor?: ReasonWhereUniqueInput;

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
