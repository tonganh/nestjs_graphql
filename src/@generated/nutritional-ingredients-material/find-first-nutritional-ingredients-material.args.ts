import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereInput } from './nutritional-ingredients-material-where.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialOrderByWithRelationInput } from './nutritional-ingredients-material-order-by-with-relation.input';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialScalarFieldEnum } from './nutritional-ingredients-material-scalar-field.enum';

@ArgsType()
export class FindFirstNutritionalIngredientsMaterialArgs {

    @Field(() => NutritionalIngredientsMaterialWhereInput, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereInput)
    where?: NutritionalIngredientsMaterialWhereInput;

    @Field(() => [NutritionalIngredientsMaterialOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NutritionalIngredientsMaterialOrderByWithRelationInput>;

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:true})
    cursor?: NutritionalIngredientsMaterialWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NutritionalIngredientsMaterialScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NutritionalIngredientsMaterialScalarFieldEnum>;
}
