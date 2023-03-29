import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DecisionCountOrderByAggregateInput } from './decision-count-order-by-aggregate.input';
import { DecisionAvgOrderByAggregateInput } from './decision-avg-order-by-aggregate.input';
import { DecisionMaxOrderByAggregateInput } from './decision-max-order-by-aggregate.input';
import { DecisionMinOrderByAggregateInput } from './decision-min-order-by-aggregate.input';
import { DecisionSumOrderByAggregateInput } from './decision-sum-order-by-aggregate.input';

@InputType()
export class DecisionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => DecisionCountOrderByAggregateInput, {nullable:true})
    _count?: DecisionCountOrderByAggregateInput;

    @Field(() => DecisionAvgOrderByAggregateInput, {nullable:true})
    _avg?: DecisionAvgOrderByAggregateInput;

    @Field(() => DecisionMaxOrderByAggregateInput, {nullable:true})
    _max?: DecisionMaxOrderByAggregateInput;

    @Field(() => DecisionMinOrderByAggregateInput, {nullable:true})
    _min?: DecisionMinOrderByAggregateInput;

    @Field(() => DecisionSumOrderByAggregateInput, {nullable:true})
    _sum?: DecisionSumOrderByAggregateInput;
}
