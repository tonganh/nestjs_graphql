import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateNestedManyWithoutNutritionalIngredientsInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-create-nested-many-without-nutritional-ingredients.input';

@InputType()
export class NutritionalIngredientsCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted?: Date | string;

    @Field(() => NutritionalIngredientsMaterialCreateNestedManyWithoutNutritionalIngredientsInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialCreateNestedManyWithoutNutritionalIngredientsInput;
}
