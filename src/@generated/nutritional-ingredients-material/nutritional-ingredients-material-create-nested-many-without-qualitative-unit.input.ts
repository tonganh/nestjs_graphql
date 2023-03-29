import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput } from './nutritional-ingredients-material-create-without-qualitative-unit.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialCreateOrConnectWithoutQualitativeUnitInput } from './nutritional-ingredients-material-create-or-connect-without-qualitative-unit.input';
import { NutritionalIngredientsMaterialCreateManyQualitativeUnitInputEnvelope } from './nutritional-ingredients-material-create-many-qualitative-unit-input-envelope.input';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';

@InputType()
export class NutritionalIngredientsMaterialCreateNestedManyWithoutQualitativeUnitInput {

    @Field(() => [NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput)
    create?: Array<NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput>;

    @Field(() => [NutritionalIngredientsMaterialCreateOrConnectWithoutQualitativeUnitInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateOrConnectWithoutQualitativeUnitInput)
    connectOrCreate?: Array<NutritionalIngredientsMaterialCreateOrConnectWithoutQualitativeUnitInput>;

    @Field(() => NutritionalIngredientsMaterialCreateManyQualitativeUnitInputEnvelope, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateManyQualitativeUnitInputEnvelope)
    createMany?: NutritionalIngredientsMaterialCreateManyQualitativeUnitInputEnvelope;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    connect?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;
}
