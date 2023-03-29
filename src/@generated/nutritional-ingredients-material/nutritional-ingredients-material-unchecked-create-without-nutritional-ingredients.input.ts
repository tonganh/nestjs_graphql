import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NutritionalIngredientsMaterialUncheckedCreateWithoutNutritionalIngredientsInput {

    @Field(() => Int, {nullable:false})
    materialId!: number;

    @Field(() => Int, {nullable:false})
    qualitativeUnitId!: number;
}
