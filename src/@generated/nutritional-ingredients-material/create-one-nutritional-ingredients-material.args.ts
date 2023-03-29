import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateInput } from './nutritional-ingredients-material-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNutritionalIngredientsMaterialArgs {

    @Field(() => NutritionalIngredientsMaterialCreateInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateInput)
    data!: NutritionalIngredientsMaterialCreateInput;
}
