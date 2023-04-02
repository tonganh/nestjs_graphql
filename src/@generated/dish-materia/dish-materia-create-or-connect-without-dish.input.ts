import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaWhereUniqueInput } from './dish-materia-where-unique.input';
import { Type } from 'class-transformer';
import { DishMateriaCreateWithoutDishInput } from './dish-materia-create-without-dish.input';

@InputType()
export class DishMateriaCreateOrConnectWithoutDishInput {

    @Field(() => DishMateriaWhereUniqueInput, {nullable:false})
    @Type(() => DishMateriaWhereUniqueInput)
    where!: DishMateriaWhereUniqueInput;

    @Field(() => DishMateriaCreateWithoutDishInput, {nullable:false})
    @Type(() => DishMateriaCreateWithoutDishInput)
    create!: DishMateriaCreateWithoutDishInput;
}
