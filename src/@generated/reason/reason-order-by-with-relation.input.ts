import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DecisionOrderByWithRelationInput } from '../decision/decision-order-by-with-relation.input';

@InputType()
export class ReasonOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    decisionId?: keyof typeof SortOrder;

    @Field(() => DecisionOrderByWithRelationInput, {nullable:true})
    decision?: DecisionOrderByWithRelationInput;
}
