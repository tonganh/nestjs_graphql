import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionalIngredientsMaterialCountOrderByAggregateInput } from './nutritional-ingredients-material-count-order-by-aggregate.input';
import { NutritionalIngredientsMaterialAvgOrderByAggregateInput } from './nutritional-ingredients-material-avg-order-by-aggregate.input';
import { NutritionalIngredientsMaterialMaxOrderByAggregateInput } from './nutritional-ingredients-material-max-order-by-aggregate.input';
import { NutritionalIngredientsMaterialMinOrderByAggregateInput } from './nutritional-ingredients-material-min-order-by-aggregate.input';
import { NutritionalIngredientsMaterialSumOrderByAggregateInput } from './nutritional-ingredients-material-sum-order-by-aggregate.input';

@InputType()
export class NutritionalIngredientsMaterialOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    nutritionalIngredientsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    materialId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    qualitativeUnitId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => NutritionalIngredientsMaterialCountOrderByAggregateInput, {nullable:true})
    _count?: NutritionalIngredientsMaterialCountOrderByAggregateInput;

    @Field(() => NutritionalIngredientsMaterialAvgOrderByAggregateInput, {nullable:true})
    _avg?: NutritionalIngredientsMaterialAvgOrderByAggregateInput;

    @Field(() => NutritionalIngredientsMaterialMaxOrderByAggregateInput, {nullable:true})
    _max?: NutritionalIngredientsMaterialMaxOrderByAggregateInput;

    @Field(() => NutritionalIngredientsMaterialMinOrderByAggregateInput, {nullable:true})
    _min?: NutritionalIngredientsMaterialMinOrderByAggregateInput;

    @Field(() => NutritionalIngredientsMaterialSumOrderByAggregateInput, {nullable:true})
    _sum?: NutritionalIngredientsMaterialSumOrderByAggregateInput;
}
