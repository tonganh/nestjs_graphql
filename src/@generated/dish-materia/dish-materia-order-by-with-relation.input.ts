import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MaterialOrderByWithRelationInput } from '../material/material-order-by-with-relation.input';
import { DishOrderByWithRelationInput } from '../dish/dish-order-by-with-relation.input';

@InputType()
export class DishMateriaOrderByWithRelationInput {

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

    @Field(() => MaterialOrderByWithRelationInput, {nullable:true})
    material?: MaterialOrderByWithRelationInput;

    @Field(() => DishOrderByWithRelationInput, {nullable:true})
    dish?: DishOrderByWithRelationInput;
}
