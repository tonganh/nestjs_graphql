import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput } from './qualitative-unit-create-without-nutritional-ingredients-material.input';
import { Type } from 'class-transformer';
import { QualitativeUnitCreateOrConnectWithoutNutritionalIngredientsMaterialInput } from './qualitative-unit-create-or-connect-without-nutritional-ingredients-material.input';
import { QualitativeUnitWhereUniqueInput } from './qualitative-unit-where-unique.input';

@InputType()
export class QualitativeUnitCreateNestedOneWithoutNutritionalIngredientsMaterialInput {

    @Field(() => QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput)
    create?: QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput;

    @Field(() => QualitativeUnitCreateOrConnectWithoutNutritionalIngredientsMaterialInput, {nullable:true})
    @Type(() => QualitativeUnitCreateOrConnectWithoutNutritionalIngredientsMaterialInput)
    connectOrCreate?: QualitativeUnitCreateOrConnectWithoutNutritionalIngredientsMaterialInput;

    @Field(() => QualitativeUnitWhereUniqueInput, {nullable:true})
    @Type(() => QualitativeUnitWhereUniqueInput)
    connect?: QualitativeUnitWhereUniqueInput;
}
