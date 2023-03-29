import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialCreateWithoutMateriaInput } from './nutritional-ingredients-material-create-without-materia.input';

@InputType()
export class NutritionalIngredientsMaterialCreateOrConnectWithoutMateriaInput {

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;

    @Field(() => NutritionalIngredientsMaterialCreateWithoutMateriaInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutMateriaInput)
    create!: NutritionalIngredientsMaterialCreateWithoutMateriaInput;
}
