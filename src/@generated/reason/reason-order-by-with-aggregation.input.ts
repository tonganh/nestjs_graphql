import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReasonCountOrderByAggregateInput } from './reason-count-order-by-aggregate.input';
import { ReasonAvgOrderByAggregateInput } from './reason-avg-order-by-aggregate.input';
import { ReasonMaxOrderByAggregateInput } from './reason-max-order-by-aggregate.input';
import { ReasonMinOrderByAggregateInput } from './reason-min-order-by-aggregate.input';
import { ReasonSumOrderByAggregateInput } from './reason-sum-order-by-aggregate.input';

@InputType()
export class ReasonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    decisionId?: keyof typeof SortOrder;

    @Field(() => ReasonCountOrderByAggregateInput, {nullable:true})
    _count?: ReasonCountOrderByAggregateInput;

    @Field(() => ReasonAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReasonAvgOrderByAggregateInput;

    @Field(() => ReasonMaxOrderByAggregateInput, {nullable:true})
    _max?: ReasonMaxOrderByAggregateInput;

    @Field(() => ReasonMinOrderByAggregateInput, {nullable:true})
    _min?: ReasonMinOrderByAggregateInput;

    @Field(() => ReasonSumOrderByAggregateInput, {nullable:true})
    _sum?: ReasonSumOrderByAggregateInput;
}
