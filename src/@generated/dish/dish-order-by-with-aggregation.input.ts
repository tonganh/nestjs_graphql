import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DishCountOrderByAggregateInput } from './dish-count-order-by-aggregate.input';
import { DishAvgOrderByAggregateInput } from './dish-avg-order-by-aggregate.input';
import { DishMaxOrderByAggregateInput } from './dish-max-order-by-aggregate.input';
import { DishMinOrderByAggregateInput } from './dish-min-order-by-aggregate.input';
import { DishSumOrderByAggregateInput } from './dish-sum-order-by-aggregate.input';

@InputType()
export class DishOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    guide?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => DishCountOrderByAggregateInput, {nullable:true})
    _count?: DishCountOrderByAggregateInput;

    @Field(() => DishAvgOrderByAggregateInput, {nullable:true})
    _avg?: DishAvgOrderByAggregateInput;

    @Field(() => DishMaxOrderByAggregateInput, {nullable:true})
    _max?: DishMaxOrderByAggregateInput;

    @Field(() => DishMinOrderByAggregateInput, {nullable:true})
    _min?: DishMinOrderByAggregateInput;

    @Field(() => DishSumOrderByAggregateInput, {nullable:true})
    _sum?: DishSumOrderByAggregateInput;
}
