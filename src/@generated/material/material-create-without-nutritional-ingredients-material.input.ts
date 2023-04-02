import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaCreateNestedManyWithoutMaterialInput } from '../dish-materia/dish-materia-create-nested-many-without-material.input';

@InputType()
export class MaterialCreateWithoutNutritionalIngredientsMaterialInput {

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

    @Field(() => DishMateriaCreateNestedManyWithoutMaterialInput, {nullable:true})
    DishMateria?: DishMateriaCreateNestedManyWithoutMaterialInput;
}
