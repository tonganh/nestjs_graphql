import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateNestedManyWithoutMateriaInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-create-nested-many-without-materia.input';
import { DishMateriaCreateNestedManyWithoutMaterialInput } from '../dish-materia/dish-materia-create-nested-many-without-material.input';

@InputType()
export class MaterialCreateInput {

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

    @Field(() => NutritionalIngredientsMaterialCreateNestedManyWithoutMateriaInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialCreateNestedManyWithoutMateriaInput;

    @Field(() => DishMateriaCreateNestedManyWithoutMaterialInput, {nullable:true})
    DishMateria?: DishMateriaCreateNestedManyWithoutMaterialInput;
}
