import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsUpdateManyMutationInput } from './nutritional-ingredients-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsWhereInput } from './nutritional-ingredients-where.input';

@ArgsType()
export class UpdateManyNutritionalIngredientsArgs {

    @Field(() => NutritionalIngredientsUpdateManyMutationInput, {nullable:false})
    @Type(() => NutritionalIngredientsUpdateManyMutationInput)
    data!: NutritionalIngredientsUpdateManyMutationInput;

    @Field(() => NutritionalIngredientsWhereInput, {nullable:true})
    @Type(() => NutritionalIngredientsWhereInput)
    where?: NutritionalIngredientsWhereInput;
}
