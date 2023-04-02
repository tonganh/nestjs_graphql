import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DishMateriaUncheckedCreateNestedManyWithoutDishInput } from '../dish-materia/dish-materia-unchecked-create-nested-many-without-dish.input';

@InputType()
export class DishUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    guide?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => DishMateriaUncheckedCreateNestedManyWithoutDishInput, {nullable:true})
    DishMateria?: DishMateriaUncheckedCreateNestedManyWithoutDishInput;
}
