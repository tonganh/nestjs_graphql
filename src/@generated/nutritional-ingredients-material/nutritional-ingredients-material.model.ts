import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredients } from '../nutritional-ingredients/nutritional-ingredients.model';
import { Material } from '../material/material.model';
import { QualitativeUnit } from '../qualitative-unit/qualitative-unit.model';

@ObjectType()
export class NutritionalIngredientsMaterial {

    @Field(() => Int, {nullable:false})
    nutritionalIngredientsId!: number;

    @Field(() => Int, {nullable:false})
    materialId!: number;

    @Field(() => Int, {nullable:false})
    qualitativeUnitId!: number;

    @Field(() => NutritionalIngredients, {nullable:false})
    nutritionalIngredients?: NutritionalIngredients;

    @Field(() => Material, {nullable:false})
    materia?: Material;

    @Field(() => QualitativeUnit, {nullable:false})
    qualitativeUnit?: QualitativeUnit;
}
