import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaWhereUniqueInput } from './dish-materia-where-unique.input';
import { Type } from 'class-transformer';
import { DishMateriaCreateWithoutMaterialInput } from './dish-materia-create-without-material.input';

@InputType()
export class DishMateriaCreateOrConnectWithoutMaterialInput {

    @Field(() => DishMateriaWhereUniqueInput, {nullable:false})
    @Type(() => DishMateriaWhereUniqueInput)
    where!: DishMateriaWhereUniqueInput;

    @Field(() => DishMateriaCreateWithoutMaterialInput, {nullable:false})
    @Type(() => DishMateriaCreateWithoutMaterialInput)
    create!: DishMateriaCreateWithoutMaterialInput;
}
