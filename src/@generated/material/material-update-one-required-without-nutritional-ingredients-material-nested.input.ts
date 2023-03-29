import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateWithoutNutritionalIngredientsMaterialInput } from './material-create-without-nutritional-ingredients-material.input';
import { Type } from 'class-transformer';
import { MaterialCreateOrConnectWithoutNutritionalIngredientsMaterialInput } from './material-create-or-connect-without-nutritional-ingredients-material.input';
import { MaterialUpsertWithoutNutritionalIngredientsMaterialInput } from './material-upsert-without-nutritional-ingredients-material.input';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialUpdateWithoutNutritionalIngredientsMaterialInput } from './material-update-without-nutritional-ingredients-material.input';

@InputType()
export class MaterialUpdateOneRequiredWithoutNutritionalIngredientsMaterialNestedInput {

    @Field(() => MaterialCreateWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => MaterialCreateWithoutNutritionalIngredientsMaterialInput)
    create?: MaterialCreateWithoutNutritionalIngredientsMaterialInput;

    @Field(() => MaterialCreateOrConnectWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => MaterialCreateOrConnectWithoutNutritionalIngredientsMaterialInput)
    connectOrCreate?: MaterialCreateOrConnectWithoutNutritionalIngredientsMaterialInput;

    @Field(() => MaterialUpsertWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => MaterialUpsertWithoutNutritionalIngredientsMaterialInput)
    upsert?: MaterialUpsertWithoutNutritionalIngredientsMaterialInput;

    @Field(() => MaterialWhereUniqueInput, {nullable:true})
    @Type(() => MaterialWhereUniqueInput)
    connect?: MaterialWhereUniqueInput;

    @Field(() => MaterialUpdateWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => MaterialUpdateWithoutNutritionalIngredientsMaterialInput)
    update?: MaterialUpdateWithoutNutritionalIngredientsMaterialInput;
}
