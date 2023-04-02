import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutMateriaInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-unchecked-create-nested-many-without-materia.input';
import { DishMateriaUncheckedCreateNestedManyWithoutMaterialInput } from '../dish-materia/dish-materia-unchecked-create-nested-many-without-material.input';

@InputType()
export class MaterialUncheckedCreateInput {

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

    @Field(() => NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutMateriaInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutMateriaInput;

    @Field(() => DishMateriaUncheckedCreateNestedManyWithoutMaterialInput, {nullable:true})
    DishMateria?: DishMateriaUncheckedCreateNestedManyWithoutMaterialInput;
}
