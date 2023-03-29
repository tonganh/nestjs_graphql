import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReasonCountAggregate } from './reason-count-aggregate.output';
import { ReasonAvgAggregate } from './reason-avg-aggregate.output';
import { ReasonSumAggregate } from './reason-sum-aggregate.output';
import { ReasonMinAggregate } from './reason-min-aggregate.output';
import { ReasonMaxAggregate } from './reason-max-aggregate.output';

@ObjectType()
export class AggregateReason {

    @Field(() => ReasonCountAggregate, {nullable:true})
    _count?: ReasonCountAggregate;

    @Field(() => ReasonAvgAggregate, {nullable:true})
    _avg?: ReasonAvgAggregate;

    @Field(() => ReasonSumAggregate, {nullable:true})
    _sum?: ReasonSumAggregate;

    @Field(() => ReasonMinAggregate, {nullable:true})
    _min?: ReasonMinAggregate;

    @Field(() => ReasonMaxAggregate, {nullable:true})
    _max?: ReasonMaxAggregate;
}
