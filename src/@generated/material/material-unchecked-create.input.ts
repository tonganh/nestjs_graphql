import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutMateriaInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-unchecked-create-nested-many-without-materia.input';

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

    @Field(() => NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutMateriaInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutMateriaInput;
}
