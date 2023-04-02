import { registerEnumType } from '@nestjs/graphql';

export enum NutritionalIngredientsMaterialScalarFieldEnum {
    nutritionalIngredientsId = "nutritionalIngredientsId",
    materialId = "materialId",
    qualitativeUnitId = "qualitativeUnitId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(NutritionalIngredientsMaterialScalarFieldEnum, { name: 'NutritionalIngredientsMaterialScalarFieldEnum', description: undefined })
