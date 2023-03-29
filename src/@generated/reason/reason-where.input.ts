import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DecisionRelationFilter } from '../decision/decision-relation-filter.input';

@InputType()
export class ReasonWhereInput {

    @Field(() => [ReasonWhereInput], {nullable:true})
    AND?: Array<ReasonWhereInput>;

    @Field(() => [ReasonWhereInput], {nullable:true})
    OR?: Array<ReasonWhereInput>;

    @Field(() => [ReasonWhereInput], {nullable:true})
    NOT?: Array<ReasonWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    decisionId?: IntFilter;

    @Field(() => DecisionRelationFilter, {nullable:true})
    decision?: DecisionRelationFilter;
}
