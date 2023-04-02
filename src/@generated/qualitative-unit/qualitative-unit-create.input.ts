import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateNestedManyWithoutQualitativeUnitInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-create-nested-many-without-qualitative-unit.input';

@InputType()
export class QualitativeUnitCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    symbol?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted?: Date | string;

    @Field(() => NutritionalIngredientsMaterialCreateNestedManyWithoutQualitativeUnitInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialCreateNestedManyWithoutQualitativeUnitInput;
}
