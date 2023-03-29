import { registerEnumType } from '@nestjs/graphql';

export enum NutritionalIngredientsMaterialScalarFieldEnum {
    nutritionalIngredientsId = "nutritionalIngredientsId",
    materialId = "materialId",
    qualitativeUnitId = "qualitativeUnitId"
}


registerEnumType(NutritionalIngredientsMaterialScalarFieldEnum, { name: 'NutritionalIngredientsMaterialScalarFieldEnum', description: undefined })
