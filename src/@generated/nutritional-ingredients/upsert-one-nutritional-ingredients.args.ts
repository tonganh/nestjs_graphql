import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsWhereUniqueInput } from './nutritional-ingredients-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsCreateInput } from './nutritional-ingredients-create.input';
import { NutritionalIngredientsUpdateInput } from './nutritional-ingredients-update.input';

@ArgsType()
export class UpsertOneNutritionalIngredientsArgs {

    @Field(() => NutritionalIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsWhereUniqueInput)
    where!: NutritionalIngredientsWhereUniqueInput;

    @Field(() => NutritionalIngredientsCreateInput, {nullable:false})
    @Type(() => NutritionalIngredientsCreateInput)
    create!: NutritionalIngredientsCreateInput;

    @Field(() => NutritionalIngredientsUpdateInput, {nullable:false})
    @Type(() => NutritionalIngredientsUpdateInput)
    update!: NutritionalIngredientsUpdateInput;
}
