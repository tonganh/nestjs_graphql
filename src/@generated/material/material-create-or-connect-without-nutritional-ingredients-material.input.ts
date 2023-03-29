import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialCreateWithoutNutritionalIngredientsMaterialInput } from './material-create-without-nutritional-ingredients-material.input';

@InputType()
export class MaterialCreateOrConnectWithoutNutritionalIngredientsMaterialInput {

    @Field(() => MaterialWhereUniqueInput, {nullable:false})
    @Type(() => MaterialWhereUniqueInput)
    where!: MaterialWhereUniqueInput;

    @Field(() => MaterialCreateWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    @Type(() => MaterialCreateWithoutNutritionalIngredientsMaterialInput)
    create!: MaterialCreateWithoutNutritionalIngredientsMaterialInput;
}
