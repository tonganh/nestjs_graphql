import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class ReasonScalarWhereWithAggregatesInput {

    @Field(() => [ReasonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReasonScalarWhereWithAggregatesInput>;

    @Field(() => [ReasonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReasonScalarWhereWithAggregatesInput>;

    @Field(() => [ReasonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReasonScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    decisionId?: IntWithAggregatesFilter;
}
