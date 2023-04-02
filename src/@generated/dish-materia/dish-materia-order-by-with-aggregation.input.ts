import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DishMateriaCountOrderByAggregateInput } from './dish-materia-count-order-by-aggregate.input';
import { DishMateriaAvgOrderByAggregateInput } from './dish-materia-avg-order-by-aggregate.input';
import { DishMateriaMaxOrderByAggregateInput } from './dish-materia-max-order-by-aggregate.input';
import { DishMateriaMinOrderByAggregateInput } from './dish-materia-min-order-by-aggregate.input';
import { DishMateriaSumOrderByAggregateInput } from './dish-materia-sum-order-by-aggregate.input';

@InputType()
export class DishMateriaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    materiaId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dishId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => DishMateriaCountOrderByAggregateInput, {nullable:true})
    _count?: DishMateriaCountOrderByAggregateInput;

    @Field(() => DishMateriaAvgOrderByAggregateInput, {nullable:true})
    _avg?: DishMateriaAvgOrderByAggregateInput;

    @Field(() => DishMateriaMaxOrderByAggregateInput, {nullable:true})
    _max?: DishMateriaMaxOrderByAggregateInput;

    @Field(() => DishMateriaMinOrderByAggregateInput, {nullable:true})
    _min?: DishMateriaMinOrderByAggregateInput;

    @Field(() => DishMateriaSumOrderByAggregateInput, {nullable:true})
    _sum?: DishMateriaSumOrderByAggregateInput;
}
