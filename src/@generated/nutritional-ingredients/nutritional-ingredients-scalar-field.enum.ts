import { registerEnumType } from '@nestjs/graphql';

export enum NutritionalIngredientsScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}


registerEnumType(NutritionalIngredientsScalarFieldEnum, { name: 'NutritionalIngredientsScalarFieldEnum', description: undefined })
