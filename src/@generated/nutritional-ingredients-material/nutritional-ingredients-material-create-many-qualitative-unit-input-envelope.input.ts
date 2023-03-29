import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateManyQualitativeUnitInput } from './nutritional-ingredients-material-create-many-qualitative-unit.input';
import { Type } from 'class-transformer';

@InputType()
export class NutritionalIngredientsMaterialCreateManyQualitativeUnitInputEnvelope {

    @Field(() => [NutritionalIngredientsMaterialCreateManyQualitativeUnitInput], {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateManyQualitativeUnitInput)
    data!: Array<NutritionalIngredientsMaterialCreateManyQualitativeUnitInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
