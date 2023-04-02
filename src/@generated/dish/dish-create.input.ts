import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaCreateNestedManyWithoutDishInput } from '../dish-materia/dish-materia-create-nested-many-without-dish.input';

@InputType()
export class DishCreateInput {

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

    @Field(() => DishMateriaCreateNestedManyWithoutDishInput, {nullable:true})
    DishMateria?: DishMateriaCreateNestedManyWithoutDishInput;
}
