import { registerEnumType } from '@nestjs/graphql';

export enum DishScalarFieldEnum {
    id = "id",
    name = "name",
    image = "image",
    guide = "guide",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(DishScalarFieldEnum, { name: 'DishScalarFieldEnum', description: undefined })
