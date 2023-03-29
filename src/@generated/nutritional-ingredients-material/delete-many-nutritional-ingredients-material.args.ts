import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereInput } from './nutritional-ingredients-material-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNutritionalIngredientsMaterialArgs {

    @Field(() => NutritionalIngredientsMaterialWhereInput, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereInput)
    where?: NutritionalIngredientsMaterialWhereInput;
}
