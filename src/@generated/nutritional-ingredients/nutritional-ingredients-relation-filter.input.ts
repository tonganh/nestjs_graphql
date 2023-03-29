import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsWhereInput } from './nutritional-ingredients-where.input';

@InputType()
export class NutritionalIngredientsRelationFilter {

    @Field(() => NutritionalIngredientsWhereInput, {nullable:true})
    is?: NutritionalIngredientsWhereInput;

    @Field(() => NutritionalIngredientsWhereInput, {nullable:true})
    isNot?: NutritionalIngredientsWhereInput;
}
