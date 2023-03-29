import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueNutritionalIngredientsMaterialOrThrowArgs {

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;
}
