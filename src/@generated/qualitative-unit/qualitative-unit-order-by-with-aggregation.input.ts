import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QualitativeUnitCountOrderByAggregateInput } from './qualitative-unit-count-order-by-aggregate.input';
import { QualitativeUnitAvgOrderByAggregateInput } from './qualitative-unit-avg-order-by-aggregate.input';
import { QualitativeUnitMaxOrderByAggregateInput } from './qualitative-unit-max-order-by-aggregate.input';
import { QualitativeUnitMinOrderByAggregateInput } from './qualitative-unit-min-order-by-aggregate.input';
import { QualitativeUnitSumOrderByAggregateInput } from './qualitative-unit-sum-order-by-aggregate.input';

@InputType()
export class QualitativeUnitOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    symbol?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => QualitativeUnitCountOrderByAggregateInput, {nullable:true})
    _count?: QualitativeUnitCountOrderByAggregateInput;

    @Field(() => QualitativeUnitAvgOrderByAggregateInput, {nullable:true})
    _avg?: QualitativeUnitAvgOrderByAggregateInput;

    @Field(() => QualitativeUnitMaxOrderByAggregateInput, {nullable:true})
    _max?: QualitativeUnitMaxOrderByAggregateInput;

    @Field(() => QualitativeUnitMinOrderByAggregateInput, {nullable:true})
    _min?: QualitativeUnitMinOrderByAggregateInput;

    @Field(() => QualitativeUnitSumOrderByAggregateInput, {nullable:true})
    _sum?: QualitativeUnitSumOrderByAggregateInput;
}
