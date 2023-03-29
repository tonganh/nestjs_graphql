import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutNutritionalIngredientsInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-unchecked-create-nested-many-without-nutritional-ingredients.input';

@InputType()
export class NutritionalIngredientsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutNutritionalIngredientsInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutNutritionalIngredientsInput;
}
