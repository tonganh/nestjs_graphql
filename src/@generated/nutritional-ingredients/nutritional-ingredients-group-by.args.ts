import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsWhereInput } from './nutritional-ingredients-where.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsOrderByWithAggregationInput } from './nutritional-ingredients-order-by-with-aggregation.input';
import { NutritionalIngredientsScalarFieldEnum } from './nutritional-ingredients-scalar-field.enum';
import { NutritionalIngredientsScalarWhereWithAggregatesInput } from './nutritional-ingredients-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsCountAggregateInput } from './nutritional-ingredients-count-aggregate.input';
import { NutritionalIngredientsAvgAggregateInput } from './nutritional-ingredients-avg-aggregate.input';
import { NutritionalIngredientsSumAggregateInput } from './nutritional-ingredients-sum-aggregate.input';
import { NutritionalIngredientsMinAggregateInput } from './nutritional-ingredients-min-aggregate.input';
import { NutritionalIngredientsMaxAggregateInput } from './nutritional-ingredients-max-aggregate.input';

@ArgsType()
export class NutritionalIngredientsGroupByArgs {

    @Field(() => NutritionalIngredientsWhereInput, {nullable:true})
    @Type(() => NutritionalIngredientsWhereInput)
    where?: NutritionalIngredientsWhereInput;

    @Field(() => [NutritionalIngredientsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NutritionalIngredientsOrderByWithAggregationInput>;

    @Field(() => [NutritionalIngredientsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NutritionalIngredientsScalarFieldEnum>;

    @Field(() => NutritionalIngredientsScalarWhereWithAggregatesInput, {nullable:true})
    having?: NutritionalIngredientsScalarWhereWithAggregatesInput;

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
