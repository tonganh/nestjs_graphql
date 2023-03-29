import { registerEnumType } from '@nestjs/graphql';

export enum QualitativeUnitScalarFieldEnum {
    id = "id",
    name = "name",
    symbol = "symbol"
}


registerEnumType(QualitativeUnitScalarFieldEnum, { name: 'QualitativeUnitScalarFieldEnum', description: undefined })
