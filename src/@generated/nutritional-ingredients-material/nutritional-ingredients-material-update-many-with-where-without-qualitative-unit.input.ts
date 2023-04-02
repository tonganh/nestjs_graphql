import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialScalarWhereInput } from './nutritional-ingredients-material-scalar-where.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialUpdateManyMutationInput } from './nutritional-ingredients-material-update-many-mutation.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateManyWithWhereWithoutQualitativeUnitInput {

    @Field(() => NutritionalIngredientsMaterialScalarWhereInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialScalarWhereInput)
    where!: NutritionalIngredientsMaterialScalarWhereInput;

    @Field(() => NutritionalIngredientsMaterialUpdateManyMutationInput, {nullable:false})
    @Type(() => NutritionalIngredientsMaterialUpdateManyMutationInput)
    data!: NutritionalIngredientsMaterialUpdateManyMutationInput;
}
