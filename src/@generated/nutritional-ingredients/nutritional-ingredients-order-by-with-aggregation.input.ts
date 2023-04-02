import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionalIngredientsCountOrderByAggregateInput } from './nutritional-ingredients-count-order-by-aggregate.input';
import { NutritionalIngredientsAvgOrderByAggregateInput } from './nutritional-ingredients-avg-order-by-aggregate.input';
import { NutritionalIngredientsMaxOrderByAggregateInput } from './nutritional-ingredients-max-order-by-aggregate.input';
import { NutritionalIngredientsMinOrderByAggregateInput } from './nutritional-ingredients-min-order-by-aggregate.input';
import { NutritionalIngredientsSumOrderByAggregateInput } from './nutritional-ingredients-sum-order-by-aggregate.input';

@InputType()
export class NutritionalIngredientsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => NutritionalIngredientsCountOrderByAggregateInput, {nullable:true})
    _count?: NutritionalIngredientsCountOrderByAggregateInput;

    @Field(() => NutritionalIngredientsAvgOrderByAggregateInput, {nullable:true})
    _avg?: NutritionalIngredientsAvgOrderByAggregateInput;

    @Field(() => NutritionalIngredientsMaxOrderByAggregateInput, {nullable:true})
    _max?: NutritionalIngredientsMaxOrderByAggregateInput;

    @Field(() => NutritionalIngredientsMinOrderByAggregateInput, {nullable:true})
    _min?: NutritionalIngredientsMinOrderByAggregateInput;

    @Field(() => NutritionalIngredientsSumOrderByAggregateInput, {nullable:true})
    _sum?: NutritionalIngredientsSumOrderByAggregateInput;
}
