import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionalIngredientsMaterialOrderByRelationAggregateInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-order-by-relation-aggregate.input';
import { DishMateriaOrderByRelationAggregateInput } from '../dish-materia/dish-materia-order-by-relation-aggregate.input';

@InputType()
export class MaterialOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imgUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => NutritionalIngredientsMaterialOrderByRelationAggregateInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialOrderByRelationAggregateInput;

    @Field(() => DishMateriaOrderByRelationAggregateInput, {nullable:true})
    DishMateria?: DishMateriaOrderByRelationAggregateInput;
}
