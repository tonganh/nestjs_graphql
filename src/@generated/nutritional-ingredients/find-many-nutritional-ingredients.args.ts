import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsWhereInput } from './nutritional-ingredients-where.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsOrderByWithRelationInput } from './nutritional-ingredients-order-by-with-relation.input';
import { NutritionalIngredientsWhereUniqueInput } from './nutritional-ingredients-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsScalarFieldEnum } from './nutritional-ingredients-scalar-field.enum';

@ArgsType()
export class FindManyNutritionalIngredientsArgs {

    @Field(() => NutritionalIngredientsWhereInput, {nullable:true})
    @Type(() => NutritionalIngredientsWhereInput)
    where?: NutritionalIngredientsWhereInput;

    @Field(() => [NutritionalIngredientsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NutritionalIngredientsOrderByWithRelationInput>;

    @Field(() => NutritionalIngredientsWhereUniqueInput, {nullable:true})
    cursor?: NutritionalIngredientsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NutritionalIngredientsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NutritionalIngredientsScalarFieldEnum>;
}
