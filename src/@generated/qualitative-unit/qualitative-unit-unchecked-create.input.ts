import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutQualitativeUnitInput } from '../nutritional-ingredients-material/nutritional-ingredients-material-unchecked-create-nested-many-without-qualitative-unit.input';

@InputType()
export class QualitativeUnitUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    symbol?: string;

    @Field(() => NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutQualitativeUnitInput, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutQualitativeUnitInput;
}
