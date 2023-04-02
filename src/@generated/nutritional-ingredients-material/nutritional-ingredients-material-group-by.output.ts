import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCountAggregate } from './nutritional-ingredients-material-count-aggregate.output';
import { NutritionalIngredientsMaterialAvgAggregate } from './nutritional-ingredients-material-avg-aggregate.output';
import { NutritionalIngredientsMaterialSumAggregate } from './nutritional-ingredients-material-sum-aggregate.output';
import { NutritionalIngredientsMaterialMinAggregate } from './nutritional-ingredients-material-min-aggregate.output';
import { NutritionalIngredientsMaterialMaxAggregate } from './nutritional-ingredients-material-max-aggregate.output';

@ObjectType()
export class NutritionalIngredientsMaterialGroupBy {

    @Field(() => Int, {nullable:false})
    nutritionalIngredientsId!: number;

    @Field(() => Int, {nullable:false})
    materialId!: number;

    @Field(() => Int, {nullable:false})
    qualitativeUnitId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => NutritionalIngredientsMaterialCountAggregate, {nullable:true})
    _count?: NutritionalIngredientsMaterialCountAggregate;

    @Field(() => NutritionalIngredientsMaterialAvgAggregate, {nullable:true})
    _avg?: NutritionalIngredientsMaterialAvgAggregate;

    @Field(() => NutritionalIngredientsMaterialSumAggregate, {nullable:true})
    _sum?: NutritionalIngredientsMaterialSumAggregate;

    @Field(() => NutritionalIngredientsMaterialMinAggregate, {nullable:true})
    _min?: NutritionalIngredientsMaterialMinAggregate;

    @Field(() => NutritionalIngredientsMaterialMaxAggregate, {nullable:true})
    _max?: NutritionalIngredientsMaterialMaxAggregate;
}
