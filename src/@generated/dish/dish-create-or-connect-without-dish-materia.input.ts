import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishWhereUniqueInput } from './dish-where-unique.input';
import { Type } from 'class-transformer';
import { DishCreateWithoutDishMateriaInput } from './dish-create-without-dish-materia.input';

@InputType()
export class DishCreateOrConnectWithoutDishMateriaInput {

    @Field(() => DishWhereUniqueInput, {nullable:false})
    @Type(() => DishWhereUniqueInput)
    where!: DishWhereUniqueInput;

    @Field(() => DishCreateWithoutDishMateriaInput, {nullable:false})
    @Type(() => DishCreateWithoutDishMateriaInput)
    create!: DishCreateWithoutDishMateriaInput;
}
