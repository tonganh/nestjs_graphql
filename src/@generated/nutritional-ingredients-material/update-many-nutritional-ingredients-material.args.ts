import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialUpdateManyMutationInput } from './nutritional-ingredients-material-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialWhereInput } from './nutritional-ingredients-material-where.input';

@ArgsType()
export class UpdateManyNutritionalIngredientsMaterialArgs {

    @Field(() => NutritionalIngredientsMaterialUpdateManyMutationInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUpdateManyMutationInput)
    data!: NutritionalIngredientsMaterialUpdateManyMutationInput;

    @Field(() => NutritionalIngredientsMaterialWhereInput, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereInput)
    where?: NutritionalIngredientsMaterialWhereInput;
}
