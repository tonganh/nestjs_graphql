import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QualitativeUnitUpdateWithoutNutritionalIngredientsMaterialInput } from './qualitative-unit-update-without-nutritional-ingredients-material.input';
import { Type } from 'class-transformer';
import { QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput } from './qualitative-unit-create-without-nutritional-ingredients-material.input';

@InputType()
export class QualitativeUnitUpsertWithoutNutritionalIngredientsMaterialInput {

    @Field(() => QualitativeUnitUpdateWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    @Type(() => QualitativeUnitUpdateWithoutNutritionalIngredientsMaterialInput)
    update!: QualitativeUnitUpdateWithoutNutritionalIngredientsMaterialInput;

    @Field(() => QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput, {nullable:false})
    @Type(() => QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput)
    create!: QualitativeUnitCreateWithoutNutritionalIngredientsMaterialInput;
}
