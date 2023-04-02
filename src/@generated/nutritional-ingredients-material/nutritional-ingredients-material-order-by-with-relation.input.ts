import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NutritionalIngredientsOrderByWithRelationInput } from '../nutritional-ingredients/nutritional-ingredients-order-by-with-relation.input';
import { MaterialOrderByWithRelationInput } from '../material/material-order-by-with-relation.input';
import { QualitativeUnitOrderByWithRelationInput } from '../qualitative-unit/qualitative-unit-order-by-with-relation.input';

@InputType()
export class NutritionalIngredientsMaterialOrderByWithRelationInput {

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

    @Field(() => NutritionalIngredientsOrderByWithRelationInput, {nullable:true})
    nutritionalIngredients?: NutritionalIngredientsOrderByWithRelationInput;

    @Field(() => MaterialOrderByWithRelationInput, {nullable:true})
    materia?: MaterialOrderByWithRelationInput;

    @Field(() => QualitativeUnitOrderByWithRelationInput, {nullable:true})
    qualitativeUnit?: QualitativeUnitOrderByWithRelationInput;
}
