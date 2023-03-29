import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsWhereInput } from './nutritional-ingredients-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNutritionalIngredientsArgs {

    @Field(() => NutritionalIngredientsWhereInput, {nullable:true})
    @Type(() => NutritionalIngredientsWhereInput)
    where?: NutritionalIngredientsWhereInput;
}
