import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialUpdateWithoutQualitativeUnitInput } from './nutritional-ingredients-material-update-without-qualitative-unit.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutQualitativeUnitInput {

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;

    @Field(() => NutritionalIngredientsMaterialUpdateWithoutQualitativeUnitInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUpdateWithoutQualitativeUnitInput)
    data!: NutritionalIngredientsMaterialUpdateWithoutQualitativeUnitInput;
}
