import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-where.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialOrderByWithRelationInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-order-by-with-relation.input';
import { NutritionalIngredientsMaterialWhereUniqueInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCountAggregateInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-count-aggregate.input';
import { NutritionalIngredientsMaterialAvgAggregateInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-avg-aggregate.input';
import { NutritionalIngredientsMaterialSumAggregateInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-sum-aggregate.input';
import { NutritionalIngredientsMaterialMinAggregateInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-min-aggregate.input';
import { NutritionalIngredientsMaterialMaxAggregateInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-max-aggregate.input';

@ArgsType()
export class NutritionalIngredientsMaterialAggregateArgs {

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
