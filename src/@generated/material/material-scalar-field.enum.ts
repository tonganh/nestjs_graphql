import { registerEnumType } from '@nestjs/graphql';

export enum MaterialScalarFieldEnum {
    id = "id",
    name = "name",
    imgUrl = "imgUrl",
    description = "description"
}


registerEnumType(MaterialScalarFieldEnum, { name: 'MaterialScalarFieldEnum', description: undefined })
