import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class QualitativeUnitCount {

    @Field(() => Int, {nullable:false})
    NutritionalIngredientsMaterial?: number;
}
