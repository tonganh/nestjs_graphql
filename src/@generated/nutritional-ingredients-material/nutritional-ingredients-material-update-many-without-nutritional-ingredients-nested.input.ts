import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-create-without-nutritional-ingredients.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialCreateOrConnectWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-create-or-connect-without-nutritional-ingredients.input';
import { NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-upsert-with-where-unique-without-nutritional-ingredients.input';
import { NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInputEnvelope } from './nutritional-ingredients-material-create-many-nutritional-ingredients-input-envelope.input';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-update-with-where-unique-without-nutritional-ingredients.input';
import { NutritionalIngredientsMaterialUpdateManyWithWhereWithoutNutritionalIngredientsInput } from './nutritional-ingredients-material-update-many-with-where-without-nutritional-ingredients.input';
import { NutritionalIngredientsMaterialScalarWhereInput } from './nutritional-ingredients-material-scalar-where.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateManyWithoutNutritionalIngredientsNestedInput {

    @Field(() => [NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput)
    create?: Array<NutritionalIngredientsMaterialCreateWithoutNutritionalIngredientsInput>;

    @Field(() => [NutritionalIngredientsMaterialCreateOrConnectWithoutNutritionalIngredientsInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateOrConnectWithoutNutritionalIngredientsInput)
    connectOrCreate?: Array<NutritionalIngredientsMaterialCreateOrConnectWithoutNutritionalIngredientsInput>;

    @Field(() => [NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutNutritionalIngredientsInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutNutritionalIngredientsInput)
    upsert?: Array<NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutNutritionalIngredientsInput>;

    @Field(() => NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInputEnvelope, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInputEnvelope)
    createMany?: NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInputEnvelope;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    set?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    disconnect?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    delete?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    connect?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;

    @Field(() => [NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutNutritionalIngredientsInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutNutritionalIngredientsInput)
    update?: Array<NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutNutritionalIngredientsInput>;

    @Field(() => [NutritionalIngredientsMaterialUpdateManyWithWhereWithoutNutritionalIngredientsInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialUpdateManyWithWhereWithoutNutritionalIngredientsInput)
    updateMany?: Array<NutritionalIngredientsMaterialUpdateManyWithWhereWithoutNutritionalIngredientsInput>;

    @Field(() => [NutritionalIngredientsMaterialScalarWhereInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialScalarWhereInput)
    deleteMany?: Array<NutritionalIngredientsMaterialScalarWhereInput>;
}
