import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialUpdateWithoutMateriaInput } from './nutritional-ingredients-material-update-without-materia.input';
import { NutritionalIngredientsMaterialCreateWithoutMateriaInput } from './nutritional-ingredients-material-create-without-materia.input';

@InputType()
export class NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutMateriaInput {

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;

    @Field(() => NutritionalIngredientsMaterialUpdateWithoutMateriaInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUpdateWithoutMateriaInput)
    update!: NutritionalIngredientsMaterialUpdateWithoutMateriaInput;

    @Field(() => NutritionalIngredientsMaterialCreateWithoutMateriaInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutMateriaInput)
    create!: NutritionalIngredientsMaterialCreateWithoutMateriaInput;
}
