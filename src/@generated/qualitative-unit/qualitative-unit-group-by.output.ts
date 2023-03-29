import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QualitativeUnitCountAggregate } from './qualitative-unit-count-aggregate.output';
import { QualitativeUnitAvgAggregate } from './qualitative-unit-avg-aggregate.output';
import { QualitativeUnitSumAggregate } from './qualitative-unit-sum-aggregate.output';
import { QualitativeUnitMinAggregate } from './qualitative-unit-min-aggregate.output';
import { QualitativeUnitMaxAggregate } from './qualitative-unit-max-aggregate.output';

@ObjectType()
export class QualitativeUnitGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    symbol?: string;

    @Field(() => QualitativeUnitCountAggregate, {nullable:true})
    _count?: QualitativeUnitCountAggregate;

    @Field(() => QualitativeUnitAvgAggregate, {nullable:true})
    _avg?: QualitativeUnitAvgAggregate;

    @Field(() => QualitativeUnitSumAggregate, {nullable:true})
    _sum?: QualitativeUnitSumAggregate;

    @Field(() => QualitativeUnitMinAggregate, {nullable:true})
    _min?: QualitativeUnitMinAggregate;

    @Field(() => QualitativeUnitMaxAggregate, {nullable:true})
    _max?: QualitativeUnitMaxAggregate;
}
