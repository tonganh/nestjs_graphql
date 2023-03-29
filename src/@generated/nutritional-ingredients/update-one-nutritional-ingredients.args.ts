import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsUpdateInput } from './nutritional-ingredients-update.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsWhereUniqueInput } from './nutritional-ingredients-where-unique.input';

@ArgsType()
export class UpdateOneNutritionalIngredientsArgs {

    @Field(() => NutritionalIngredientsUpdateInput, {nullable:false})
    @Type(() => NutritionalIngredientsUpdateInput)
    data!: NutritionalIngredientsUpdateInput;

    @Field(() => NutritionalIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsWhereUniqueInput)
    where!: NutritionalIngredientsWhereUniqueInput;
}
