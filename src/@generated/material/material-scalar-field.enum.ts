import { registerEnumType } from '@nestjs/graphql';

export enum MaterialScalarFieldEnum {
    id = "id",
    name = "name",
    imgUrl = "imgUrl",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(MaterialScalarFieldEnum, { name: 'MaterialScalarFieldEnum', description: undefined })
