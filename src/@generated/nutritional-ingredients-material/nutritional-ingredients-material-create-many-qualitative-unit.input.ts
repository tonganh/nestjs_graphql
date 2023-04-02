import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NutritionalIngredientsMaterialCreateManyQualitativeUnitInput {

    @Field(() => Int, {nullable:false})
    nutritionalIngredientsId!: number;

    @Field(() => Int, {nullable:false})
    materialId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
