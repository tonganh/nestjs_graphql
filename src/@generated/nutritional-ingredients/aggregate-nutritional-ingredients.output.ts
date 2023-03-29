import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NutritionalIngredientsCountAggregate } from './nutritional-ingredients-count-aggregate.output';
import { NutritionalIngredientsAvgAggregate } from './nutritional-ingredients-avg-aggregate.output';
import { NutritionalIngredientsSumAggregate } from './nutritional-ingredients-sum-aggregate.output';
import { NutritionalIngredientsMinAggregate } from './nutritional-ingredients-min-aggregate.output';
import { NutritionalIngredientsMaxAggregate } from './nutritional-ingredients-max-aggregate.output';

@ObjectType()
export class AggregateNutritionalIngredients {

    @Field(() => NutritionalIngredientsCountAggregate, {nullable:true})
    _count?: NutritionalIngredientsCountAggregate;

    @Field(() => NutritionalIngredientsAvgAggregate, {nullable:true})
    _avg?: NutritionalIngredientsAvgAggregate;

    @Field(() => NutritionalIngredientsSumAggregate, {nullable:true})
    _sum?: NutritionalIngredientsSumAggregate;

    @Field(() => NutritionalIngredientsMinAggregate, {nullable:true})
    _min?: NutritionalIngredientsMinAggregate;

    @Field(() => NutritionalIngredientsMaxAggregate, {nullable:true})
    _max?: NutritionalIngredientsMaxAggregate;
}
