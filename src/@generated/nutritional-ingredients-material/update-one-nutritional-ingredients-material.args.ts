import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialUpdateInput } from './nutritional-ingredients-material-update.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';

@ArgsType()
export class UpdateOneNutritionalIngredientsMaterialArgs {

    @Field(() => NutritionalIngredientsMaterialUpdateInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUpdateInput)
    data!: NutritionalIngredientsMaterialUpdateInput;

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;
}
