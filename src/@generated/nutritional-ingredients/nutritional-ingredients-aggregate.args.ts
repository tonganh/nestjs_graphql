import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsWhereInput } from './nutritional-ingredients-where.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsOrderByWithRelationInput } from './nutritional-ingredients-order-by-with-relation.input';
import { NutritionalIngredientsWhereUniqueInput } from './nutritional-ingredients-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsCountAggregateInput } from './nutritional-ingredients-count-aggregate.input';
import { NutritionalIngredientsAvgAggregateInput } from './nutritional-ingredients-avg-aggregate.input';
import { NutritionalIngredientsSumAggregateInput } from './nutritional-ingredients-sum-aggregate.input';
import { NutritionalIngredientsMinAggregateInput } from './nutritional-ingredients-min-aggregate.input';
import { NutritionalIngredientsMaxAggregateInput } from './nutritional-ingredients-max-aggregate.input';

@ArgsType()
export class NutritionalIngredientsAggregateArgs {

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

    @Field(() => NutritionalIngredientsCountAggregateInput, {nullable:true})
    _count?: NutritionalIngredientsCountAggregateInput;

    @Field(() => NutritionalIngredientsAvgAggregateInput, {nullable:true})
    _avg?: NutritionalIngredientsAvgAggregateInput;

    @Field(() => NutritionalIngredientsSumAggregateInput, {nullable:true})
    _sum?: NutritionalIngredientsSumAggregateInput;

    @Field(() => NutritionalIngredientsMinAggregateInput, {nullable:true})
    _min?: NutritionalIngredientsMinAggregateInput;

    @Field(() => NutritionalIngredientsMaxAggregateInput, {nullable:true})
    _max?: NutritionalIngredientsMaxAggregateInput;
}
