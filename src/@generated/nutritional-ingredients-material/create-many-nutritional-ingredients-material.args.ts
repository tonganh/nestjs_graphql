import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateManyInput } from './nutritional-ingredients-material-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNutritionalIngredientsMaterialArgs {

    @Field(() => [NutritionalIngredientsMaterialCreateManyInput], {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateManyInput)
    data!: Array<NutritionalIngredientsMaterialCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
