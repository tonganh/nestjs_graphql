import { registerEnumType } from '@nestjs/graphql';

export enum DecisionScalarFieldEnum {
    id = "id",
    name = "name",
    created_at = "created_at"
}


registerEnumType(DecisionScalarFieldEnum, { name: 'DecisionScalarFieldEnum', description: undefined })
