import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereInput } from './nutritional-ingredients-material-where.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialOrderByWithAggregationInput } from './nutritional-ingredients-material-order-by-with-aggregation.input';
import { NutritionalIngredientsMaterialScalarFieldEnum } from './nutritional-ingredients-material-scalar-field.enum';
import { NutritionalIngredientsMaterialScalarWhereWithAggregatesInput } from './nutritional-ingredients-material-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCountAggregateInput } from './nutritional-ingredients-material-count-aggregate.input';
import { NutritionalIngredientsMaterialAvgAggregateInput } from './nutritional-ingredients-material-avg-aggregate.input';
import { NutritionalIngredientsMaterialSumAggregateInput } from './nutritional-ingredients-material-sum-aggregate.input';
import { NutritionalIngredientsMaterialMinAggregateInput } from './nutritional-ingredients-material-min-aggregate.input';
import { NutritionalIngredientsMaterialMaxAggregateInput } from './nutritional-ingredients-material-max-aggregate.input';

@ArgsType()
export class NutritionalIngredientsMaterialGroupByArgs {

    @Field(() => NutritionalIngredientsMaterialWhereInput, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereInput)
    where?: NutritionalIngredientsMaterialWhereInput;

    @Field(() => [NutritionalIngredientsMaterialOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NutritionalIngredientsMaterialOrderByWithAggregationInput>;

    @Field(() => [NutritionalIngredientsMaterialScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NutritionalIngredientsMaterialScalarFieldEnum>;

    @Field(() => NutritionalIngredientsMaterialScalarWhereWithAggregatesInput, {nullable:true})
    having?: NutritionalIngredientsMaterialScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NutritionalIngredientsMaterialCountAggregateInput, {nullable:true})
    _count?: NutritionalIngredientsMaterialCountAggregateInput;

    @Field(() => NutritionalIngredientsMaterialAvgAggregateInput, {nullable:true})
    _avg?: NutritionalIngredientsMaterialAvgAggregateInput;

    @Field(() => NutritionalIngredientsMaterialSumAggregateInput, {nullable:true})
    _sum?: NutritionalIngredientsMaterialSumAggregateInput;

    @Field(() => NutritionalIngredientsMaterialMinAggregateInput, {nullable:true})
    _min?: NutritionalIngredientsMaterialMinAggregateInput;

    @Field(() => NutritionalIngredientsMaterialMaxAggregateInput, {nullable:true})
    _max?: NutritionalIngredientsMaterialMaxAggregateInput;
}
