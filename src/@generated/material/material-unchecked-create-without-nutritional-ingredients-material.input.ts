import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DishMateriaUncheckedCreateNestedManyWithoutMaterialInput } from '../dish-materia/dish-materia-unchecked-create-nested-many-without-material.input';

@InputType()
export class MaterialUncheckedCreateWithoutNutritionalIngredientsMaterialInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    imgUrl?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => DishMateriaUncheckedCreateNestedManyWithoutMaterialInput, {nullable:true})
    DishMateria?: DishMateriaUncheckedCreateNestedManyWithoutMaterialInput;
}
