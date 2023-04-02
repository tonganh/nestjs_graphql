import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishCreateNestedOneWithoutDishMateriaInput } from '../dish/dish-create-nested-one-without-dish-materia.input';

@InputType()
export class DishMateriaCreateWithoutMaterialInput {

    @Field(() => String, {nullable:true})
    amountText?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => DishCreateNestedOneWithoutDishMateriaInput, {nullable:false})
    dish!: DishCreateNestedOneWithoutDishMateriaInput;
}
