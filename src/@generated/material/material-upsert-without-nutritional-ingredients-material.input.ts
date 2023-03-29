import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialUpdateWithoutNutritionalIngredientsMaterialInput } from './material-update-without-nutritional-ingredients-material.input';
import { Type } from 'class-transformer';
import { MaterialCreateWithoutNutritionalIngredientsMaterialInput } from './material-create-without-nutritional-ingredients-material.input';

@InputType()
export class MaterialUpsertWithoutNutritionalIngredientsMaterialInput {

    @Field(() => MaterialUpdateWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    @Type(() => MaterialUpdateWithoutNutritionalIngredientsMaterialInput)
    update!: MaterialUpdateWithoutNutritionalIngredientsMaterialInput;

    @Field(() => MaterialCreateWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    @Type(() => MaterialCreateWithoutNutritionalIngredientsMaterialInput)
    create!: MaterialCreateWithoutNutritionalIngredientsMaterialInput;
}
