import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsWhereUniqueInput } from './nutritional-ingredients-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneNutritionalIngredientsArgs {

    @Field(() => NutritionalIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsWhereUniqueInput)
    where!: NutritionalIngredientsWhereUniqueInput;
}
