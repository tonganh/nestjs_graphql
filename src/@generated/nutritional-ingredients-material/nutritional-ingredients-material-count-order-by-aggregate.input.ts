import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NutritionalIngredientsMaterialCountOrderByAggregateInput {

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
}
