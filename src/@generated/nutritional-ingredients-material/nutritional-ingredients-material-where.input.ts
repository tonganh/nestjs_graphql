import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { NutritionalIngredientsRelationFilter } from '../nutritional-ingredients/nutritional-ingredients-relation-filter.input';
import { MaterialRelationFilter } from '../material/material-relation-filter.input';
import { QualitativeUnitRelationFilter } from '../qualitative-unit/qualitative-unit-relation-filter.input';

@InputType()
export class NutritionalIngredientsMaterialWhereInput {

    @Field(() => [NutritionalIngredientsMaterialWhereInput], {nullable:true})
    AND?: Array<NutritionalIngredientsMaterialWhereInput>;

    @Field(() => [NutritionalIngredientsMaterialWhereInput], {nullable:true})
    OR?: Array<NutritionalIngredientsMaterialWhereInput>;

    @Field(() => [NutritionalIngredientsMaterialWhereInput], {nullable:true})
    NOT?: Array<NutritionalIngredientsMaterialWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    nutritionalIngredientsId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    materialId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    qualitativeUnitId?: IntFilter;

    @Field(() => NutritionalIngredientsRelationFilter, {nullable:true})
    nutritionalIngredients?: NutritionalIngredientsRelationFilter;

    @Field(() => MaterialRelationFilter, {nullable:true})
    materia?: MaterialRelationFilter;

    @Field(() => QualitativeUnitRelationFilter, {nullable:true})
    qualitativeUnit?: QualitativeUnitRelationFilter;
}
