import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NutritionalIngredientsMaterialCreateManyMateriaInput {

    @Field(() => Int, {nullable:false})
    nutritionalIngredientsId!: number;

    @Field(() => Int, {nullable:false})
    qualitativeUnitId!: number;
}
