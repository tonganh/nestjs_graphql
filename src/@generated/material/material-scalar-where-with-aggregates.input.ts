import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class MaterialScalarWhereWithAggregatesInput {

    @Field(() => [MaterialScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MaterialScalarWhereWithAggregatesInput>;

    @Field(() => [MaterialScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MaterialScalarWhereWithAggregatesInput>;

    @Field(() => [MaterialScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MaterialScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    imgUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}
