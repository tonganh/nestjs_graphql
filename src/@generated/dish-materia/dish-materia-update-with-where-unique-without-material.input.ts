import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaWhereUniqueInput } from './dish-materia-where-unique.input';
import { Type } from 'class-transformer';
import { DishMateriaUpdateWithoutMaterialInput } from './dish-materia-update-without-material.input';

@InputType()
export class DishMateriaUpdateWithWhereUniqueWithoutMaterialInput {

    @Field(() => DishMateriaWhereUniqueInput, {nullable:false})
    @Type(() => DishMateriaWhereUniqueInput)
    where!: DishMateriaWhereUniqueInput;

    @Field(() => DishMateriaUpdateWithoutMaterialInput, {nullable:false})
    @Type(() => DishMateriaUpdateWithoutMaterialInput)
    data!: DishMateriaUpdateWithoutMaterialInput;
}
