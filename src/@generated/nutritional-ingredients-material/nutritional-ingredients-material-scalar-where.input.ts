import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class NutritionalIngredientsMaterialScalarWhereInput {

    @Field(() => [NutritionalIngredientsMaterialScalarWhereInput], {nullable:true})
    AND?: Array<NutritionalIngredientsMaterialScalarWhereInput>;

    @Field(() => [NutritionalIngredientsMaterialScalarWhereInput], {nullable:true})
    OR?: Array<NutritionalIngredientsMaterialScalarWhereInput>;

    @Field(() => [NutritionalIngredientsMaterialScalarWhereInput], {nullable:true})
    NOT?: Array<NutritionalIngredientsMaterialScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    nutritionalIngredientsId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    materialId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    qualitativeUnitId?: IntFilter;
}
