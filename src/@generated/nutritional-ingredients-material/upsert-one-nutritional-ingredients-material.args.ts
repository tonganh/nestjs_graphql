import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialCreateInput } from './nutritional-ingredients-material-create.input';
import { NutritionalIngredientsMaterialUpdateInput } from './nutritional-ingredients-material-update.input';

@ArgsType()
export class UpsertOneNutritionalIngredientsMaterialArgs {

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;

    @Field(() => NutritionalIngredientsMaterialCreateInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateInput)
    create!: NutritionalIngredientsMaterialCreateInput;

    @Field(() => NutritionalIngredientsMaterialUpdateInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUpdateInput)
    update!: NutritionalIngredientsMaterialUpdateInput;
}
