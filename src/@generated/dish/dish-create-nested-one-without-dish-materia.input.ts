import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishCreateWithoutDishMateriaInput } from './dish-create-without-dish-materia.input';
import { Type } from 'class-transformer';
import { DishCreateOrConnectWithoutDishMateriaInput } from './dish-create-or-connect-without-dish-materia.input';
import { DishWhereUniqueInput } from './dish-where-unique.input';

@InputType()
export class DishCreateNestedOneWithoutDishMateriaInput {

    @Field(() => DishCreateWithoutDishMateriaInput, {nullable:true})
    @Type(() => DishCreateWithoutDishMateriaInput)
    create?: DishCreateWithoutDishMateriaInput;

    @Field(() => DishCreateOrConnectWithoutDishMateriaInput, {nullable:true})
    @Type(() => DishCreateOrConnectWithoutDishMateriaInput)
    connectOrCreate?: DishCreateOrConnectWithoutDishMateriaInput;

    @Field(() => DishWhereUniqueInput, {nullable:true})
    @Type(() => DishWhereUniqueInput)
    connect?: DishWhereUniqueInput;
}
