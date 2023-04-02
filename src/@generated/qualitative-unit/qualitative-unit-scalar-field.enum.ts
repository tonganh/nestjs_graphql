import { registerEnumType } from '@nestjs/graphql';

export enum QualitativeUnitScalarFieldEnum {
    id = "id",
    name = "name",
    symbol = "symbol",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deleted = "deleted"
}


registerEnumType(QualitativeUnitScalarFieldEnum, { name: 'QualitativeUnitScalarFieldEnum', description: undefined })
