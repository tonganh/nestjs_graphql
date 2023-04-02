import { registerEnumType } from '@nestjs/graphql';

export enum DishMateriaScalarFieldEnum {
    id = "id",
    materiaId = "materiaId",
    dishId = "dishId",
    amountText = "amountText",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(DishMateriaScalarFieldEnum, { name: 'DishMateriaScalarFieldEnum', description: undefined })
