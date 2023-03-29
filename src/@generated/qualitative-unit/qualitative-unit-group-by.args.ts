import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QualitativeUnitWhereInput } from './qualitative-unit-where.input';
import { Type } from 'class-transformer';
import { QualitativeUnitOrderByWithAggregationInput } from './qualitative-unit-order-by-with-aggregation.input';
import { QualitativeUnitScalarFieldEnum } from './qualitative-unit-scalar-field.enum';
import { QualitativeUnitScalarWhereWithAggregatesInput } from './qualitative-unit-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { QualitativeUnitCountAggregateInput } from './qualitative-unit-count-aggregate.input';
import { QualitativeUnitAvgAggregateInput } from './qualitative-unit-avg-aggregate.input';
import { QualitativeUnitSumAggregateInput } from './qualitative-unit-sum-aggregate.input';
import { QualitativeUnitMinAggregateInput } from './qualitative-unit-min-aggregate.input';
import { QualitativeUnitMaxAggregateInput } from './qualitative-unit-max-aggregate.input';

@ArgsType()
export class QualitativeUnitGroupByArgs {

    @Field(() => QualitativeUnitWhereInput, {nullable:true})
    @Type(() => QualitativeUnitWhereInput)
    where?: QualitativeUnitWhereInput;

    @Field(() => [QualitativeUnitOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<QualitativeUnitOrderByWithAggregationInput>;

    @Field(() => [QualitativeUnitScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof QualitativeUnitScalarFieldEnum>;

    @Field(() => QualitativeUnitScalarWhereWithAggregatesInput, {nullable:true})
    having?: QualitativeUnitScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => QualitativeUnitCountAggregateInput, {nullable:true})
    _count?: QualitativeUnitCountAggregateInput;

    @Field(() => QualitativeUnitAvgAggregateInput, {nullable:true})
    _avg?: QualitativeUnitAvgAggregateInput;

    @Field(() => QualitativeUnitSumAggregateInput, {nullable:true})
    _sum?: QualitativeUnitSumAggregateInput;

    @Field(() => QualitativeUnitMinAggregateInput, {nullable:true})
    _min?: QualitativeUnitMinAggregateInput;

    @Field(() => QualitativeUnitMaxAggregateInput, {nullable:true})
    _max?: QualitativeUnitMaxAggregateInput;
}
