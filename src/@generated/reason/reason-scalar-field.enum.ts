import { registerEnumType } from '@nestjs/graphql';

export enum ReasonScalarFieldEnum {
    id = "id",
    name = "name",
    created_at = "created_at",
    decisionId = "decisionId"
}


registerEnumType(ReasonScalarFieldEnum, { name: 'ReasonScalarFieldEnum', description: undefined })
