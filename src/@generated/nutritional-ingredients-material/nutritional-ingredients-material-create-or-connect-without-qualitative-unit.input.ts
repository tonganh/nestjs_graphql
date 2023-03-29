import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput } from './nutritional-ingredients-material-create-without-qualitative-unit.input';

@InputType()
export class NutritionalIngredientsMaterialCreateOrConnectWithoutQualitativeUnitInput {

    @Field(() => NutritionalIngredientsMaterialWhereUniqueInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    where!: NutritionalIngredientsMaterialWhereUniqueInput;

    @Field(() => NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput)
    create!: NutritionalIngredientsMaterialCreateWithoutQualitativeUnitInput;
}
