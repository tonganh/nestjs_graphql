import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaWhereUniqueInput } from './dish-materia-where-unique.input';
import { Type } from 'class-transformer';
import { DishMateriaUpdateWithoutMaterialInput } from './dish-materia-update-without-material.input';
import { DishMateriaCreateWithoutMaterialInput } from './dish-materia-create-without-material.input';

@InputType()
export class DishMateriaUpsertWithWhereUniqueWithoutMaterialInput {

    @Field(() => DishMateriaWhereUniqueInput, {nullable:false})
    @Type(() => DishMateriaWhereUniqueInput)
    where!: DishMateriaWhereUniqueInput;

    @Field(() => DishMateriaUpdateWithoutMaterialInput, {nullable:false})
    @Type(() => DishMateriaUpdateWithoutMaterialInput)
    update!: DishMateriaUpdateWithoutMaterialInput;

    @Field(() => DishMateriaCreateWithoutMaterialInput, {nullable:false})
    @Type(() => DishMateriaCreateWithoutMaterialInput)
    create!: DishMateriaCreateWithoutMaterialInput;
}
