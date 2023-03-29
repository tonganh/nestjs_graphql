import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateWithoutNutritionalIngredientsMaterialInput } from './material-create-without-nutritional-ingredients-material.input';
import { Type } from 'class-transformer';
import { MaterialCreateOrConnectWithoutNutritionalIngredientsMaterialInput } from './material-create-or-connect-without-nutritional-ingredients-material.input';
import { MaterialWhereUniqueInput } from './material-where-unique.input';

@InputType()
export class MaterialCreateNestedOneWithoutNutritionalIngredientsMaterialInput {

    @Field(() => MaterialCreateWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => MaterialCreateWithoutNutritionalIngredientsMaterialInput)
    create?: MaterialCreateWithoutNutritionalIngredientsMaterialInput;

    @Field(() => MaterialCreateOrConnectWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => MaterialCreateOrConnectWithoutNutritionalIngredientsMaterialInput)
    connectOrCreate?: MaterialCreateOrConnectWithoutNutritionalIngredientsMaterialInput;

    @Field(() => MaterialWhereUniqueInput, {nullable:true})
    @Type(() => MaterialWhereUniqueInput)
    connect?: MaterialWhereUniqueInput;
}
