import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialUpdateWithoutMateriaInput } from './nutritional-ingredients-material-update-without-materia.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutMateriaInput {

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;

    @Field(() => NutritionalIngredientsMaterialUpdateWithoutMateriaInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUpdateWithoutMateriaInput)
    data!: NutritionalIngredientsMaterialUpdateWithoutMateriaInput;
}
