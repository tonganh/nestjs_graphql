import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DecisionCountAggregate } from './decision-count-aggregate.output';
import { DecisionAvgAggregate } from './decision-avg-aggregate.output';
import { DecisionSumAggregate } from './decision-sum-aggregate.output';
import { DecisionMinAggregate } from './decision-min-aggregate.output';
import { DecisionMaxAggregate } from './decision-max-aggregate.output';

@ObjectType()
export class AggregateDecision {

    @Field(() => DecisionCountAggregate, {nullable:true})
    _count?: DecisionCountAggregate;

    @Field(() => DecisionAvgAggregate, {nullable:true})
    _avg?: DecisionAvgAggregate;

    @Field(() => DecisionSumAggregate, {nullable:true})
    _sum?: DecisionSumAggregate;

    @Field(() => DecisionMinAggregate, {nullable:true})
    _min?: DecisionMinAggregate;

    @Field(() => DecisionMaxAggregate, {nullable:true})
    _max?: DecisionMaxAggregate;
}
