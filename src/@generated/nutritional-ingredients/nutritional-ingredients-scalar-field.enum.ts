import { registerEnumType } from '@nestjs/graphql';

export enum NutritionalIngredientsScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deleted = "deleted"
}


registerEnumType(NutritionalIngredientsScalarFieldEnum, { name: 'NutritionalIngredientsScalarFieldEnum', description: undefined })
