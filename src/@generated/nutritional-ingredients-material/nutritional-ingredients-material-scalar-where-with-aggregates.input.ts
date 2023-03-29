import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class NutritionalIngredientsMaterialScalarWhereWithAggregatesInput {

    @Field(() => [NutritionalIngredientsMaterialScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NutritionalIngredientsMaterialScalarWhereWithAggregatesInput>;

    @Field(() => [NutritionalIngredientsMaterialScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NutritionalIngredientsMaterialScalarWhereWithAggregatesInput>;

    @Field(() => [NutritionalIngredientsMaterialScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NutritionalIngredientsMaterialScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    nutritionalIngredientsId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    materialId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    qualitativeUnitId?: IntWithAggregatesFilter;
}
