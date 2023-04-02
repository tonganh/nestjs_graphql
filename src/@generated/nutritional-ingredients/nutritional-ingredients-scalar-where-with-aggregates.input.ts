import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class NutritionalIngredientsScalarWhereWithAggregatesInput {

    @Field(() => [NutritionalIngredientsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NutritionalIngredientsScalarWhereWithAggregatesInput>;

    @Field(() => [NutritionalIngredientsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NutritionalIngredientsScalarWhereWithAggregatesInput>;

    @Field(() => [NutritionalIngredientsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NutritionalIngredientsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deleted?: DateTimeNullableWithAggregatesFilter;
}
