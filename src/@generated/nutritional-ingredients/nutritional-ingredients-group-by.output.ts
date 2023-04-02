import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsCountAggregate } from './nutritional-ingredients-count-aggregate.output';
import { NutritionalIngredientsAvgAggregate } from './nutritional-ingredients-avg-aggregate.output';
import { NutritionalIngredientsSumAggregate } from './nutritional-ingredients-sum-aggregate.output';
import { NutritionalIngredientsMinAggregate } from './nutritional-ingredients-min-aggregate.output';
import { NutritionalIngredientsMaxAggregate } from './nutritional-ingredients-max-aggregate.output';

@ObjectType()
export class NutritionalIngredientsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deleted?: Date | string;

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
