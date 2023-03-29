import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialNutritionalIngredientsIdMaterialIdQualitativeUnitIdCompoundUniqueInput } from './nutritional-ingredients-material-nutritional-ingredients-id-material-id-qualitative-unit-id-compound-unique.input';

@InputType()
export class NutritionalIngredientsMaterialWhereUniqueInput {

    @Field(() => NutritionalIngredientsMaterialNutritionalIngredientsIdMaterialIdQualitativeUnitIdCompoundUniqueInput, {nullable:true})
    nutritionalIngredientsId_materialId_qualitativeUnitId?: NutritionalIngredientsMaterialNutritionalIngredientsIdMaterialIdQualitativeUnitIdCompoundUniqueInput;
}
