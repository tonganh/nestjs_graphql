import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialUncheckedUpdateManyInput } from './nutritional-ingredients-material-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialWhereInput } from './nutritional-ingredients-material-where.input';

@ArgsType()
export class UpdateManyNutritionalIngredientsMaterialArgs {

    @Field(() => NutritionalIngredientsMaterialUncheckedUpdateManyInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUncheckedUpdateManyInput)
    data!: NutritionalIngredientsMaterialUncheckedUpdateManyInput;

    @Field(() => NutritionalIngredientsMaterialWhereInput, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereInput)
    where?: NutritionalIngredientsMaterialWhereInput;
}
