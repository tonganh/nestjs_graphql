import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QualitativeUnitWhereUniqueInput } from './qualitative-unit-where-unique.input';
import { Type } from 'class-transformer';
import { QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput } from './qualitative-unit-create-without-nutritional-ingredients-material.input';

@InputType()
export class QualitativeUnitCreateOrConnectWithoutNutritionalIngredientsMaterialInput {

    @Field(() => QualitativeUnitWhereUniqueInput, {nullable:false})
    @Type(() => QualitativeUnitWhereUniqueInput)
    where!: QualitativeUnitWhereUniqueInput;

    @Field(() => QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    @Type(() => QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput)
    create!: QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput;
}
