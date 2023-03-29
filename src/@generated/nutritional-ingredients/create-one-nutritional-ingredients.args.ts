import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsCreateInput } from './nutritional-ingredients-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNutritionalIngredientsArgs {

    @Field(() => NutritionalIngredientsCreateInput, {nullable:false})
    @Type(() => NutritionalIngredientsCreateInput)
    data!: NutritionalIngredientsCreateInput;
}
