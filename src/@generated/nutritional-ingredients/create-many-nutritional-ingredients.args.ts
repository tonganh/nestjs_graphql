import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsCreateManyInput } from './nutritional-ingredients-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNutritionalIngredientsArgs {

    @Field(() => [NutritionalIngredientsCreateManyInput], {nullable:false})
    @Type(() => NutritionalIngredientsCreateManyInput)
    data!: Array<NutritionalIngredientsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
