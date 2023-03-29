import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReasonOrderByRelationAggregateInput } from '../reason/reason-order-by-relation-aggregate.input';

@InputType()
export class DecisionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => ReasonOrderByRelationAggregateInput, {nullable:true})
    Reason?: ReasonOrderByRelationAggregateInput;
}
