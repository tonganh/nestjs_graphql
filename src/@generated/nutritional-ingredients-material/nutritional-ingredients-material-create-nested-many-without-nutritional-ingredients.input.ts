import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-create-without-nutritional-ingredients.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialCreateOrConnectWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-create-or-connect-without-nutritional-ingredients.input';
import { NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInputEnvelope } from './nutritional-ingredients-material-create-many-nutritional-ingredients-input-envelope.input';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';

@InputType()
export class NutritionalIngredientsMaterialCreateNestedManyWithoutNutritionalIngredientsInput {

    @Field(() => [NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput)
    create?: Array<NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput>;

    @Field(() => [NutritionalIngredientsMaterialCreateOrConnectWithoutNutritionalIngredientsInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateOrConnectWithoutNutritionalIngredientsInput)
    connectOrCreate?: Array<NutritionalIngredientsMaterialCreateOrConnectWithoutNutritionalIngredientsInput>;

    @Field(() => NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInputEnvelope, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInputEnvelope)
    createMany?: NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInputEnvelope;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    connect?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;
}
