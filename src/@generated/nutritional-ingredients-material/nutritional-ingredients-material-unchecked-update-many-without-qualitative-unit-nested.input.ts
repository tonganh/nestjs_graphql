import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput } from './nutritional-ingredients-material-create-without-qualitative-unit.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialCreateOrConnectWithoutQualitativeUnitInput } from './nutritional-ingredients-material-create-or-connect-without-qualitative-unit.input';
import { NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutQualitativeUnitInput } from './nutritional-ingredients-material-upsert-with-where-unique-without-qualitative-unit.input';
import { NutritionalIngredientsMaterialCreateManyQualitativeUnitInputEnvelope } from './nutritional-ingredients-material-create-many-qualitative-unit-input-envelope.input';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutQualitativeUnitInput } from './nutritional-ingredients-material-update-with-where-unique-without-qualitative-unit.input';
import { NutritionalIngredientsMaterialUpdateManyWithWhereWithoutQualitativeUnitInput } from './nutritional-ingredients-material-update-many-with-where-without-qualitative-unit.input';
import { NutritionalIngredientsMaterialScalarWhereInput } from './nutritional-ingredients-material-scalar-where.input';

@InputType()
export class NutritionalIngredientsMaterialUncheckedUpdateManyWithoutQualitativeUnitNestedInput {

    @Field(() => [NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput)
    create?: Array<NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput>;

    @Field(() => [NutritionalIngredientsMaterialCreateOrConnectWithoutQualitativeUnitInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateOrConnectWithoutQualitativeUnitInput)
    connectOrCreate?: Array<NutritionalIngredientsMaterialCreateOrConnectWithoutQualitativeUnitInput>;

    @Field(() => [NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutQualitativeUnitInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutQualitativeUnitInput)
    upsert?: Array<NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutQualitativeUnitInput>;

    @Field(() => NutritionalIngredientsMaterialCreateManyQualitativeUnitInputEnvelope, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateManyQualitativeUnitInputEnvelope)
    createMany?: NutritionalIngredientsMaterialCreateManyQualitativeUnitInputEnvelope;

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

    @Field(() => [NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutQualitativeUnitInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutQualitativeUnitInput)
    update?: Array<NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutQualitativeUnitInput>;

    @Field(() => [NutritionalIngredientsMaterialUpdateManyWithWhereWithoutQualitativeUnitInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialUpdateManyWithWhereWithoutQualitativeUnitInput)
    updateMany?: Array<NutritionalIngredientsMaterialUpdateManyWithWhereWithoutQualitativeUnitInput>;

    @Field(() => [NutritionalIngredientsMaterialScalarWhereInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialScalarWhereInput)
    deleteMany?: Array<NutritionalIngredientsMaterialScalarWhereInput>;
}
