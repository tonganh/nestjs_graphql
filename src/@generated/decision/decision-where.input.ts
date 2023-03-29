import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ReasonListRelationFilter } from '../reason/reason-list-relation-filter.input';

@InputType()
export class DecisionWhereInput {

    @Field(() => [DecisionWhereInput], {nullable:true})
    AND?: Array<DecisionWhereInput>;

    @Field(() => [DecisionWhereInput], {nullable:true})
    OR?: Array<DecisionWhereInput>;

    @Field(() => [DecisionWhereInput], {nullable:true})
    NOT?: Array<DecisionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => ReasonListRelationFilter, {nullable:true})
    Reason?: ReasonListRelationFilter;
}
