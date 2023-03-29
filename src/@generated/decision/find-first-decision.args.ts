import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DecisionWhereInput } from './decision-where.input';
import { Type } from 'class-transformer';
import { DecisionOrderByWithRelationInput } from './decision-order-by-with-relation.input';
import { DecisionWhereUniqueInput } from './decision-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DecisionScalarFieldEnum } from './decision-scalar-field.enum';

@ArgsType()
export class FindFirstDecisionArgs {

    @Field(() => DecisionWhereInput, {nullable:true})
    @Type(() => DecisionWhereInput)
    where?: DecisionWhereInput;

    @Field(() => [DecisionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DecisionOrderByWithRelationInput>;

    @Field(() => DecisionWhereUniqueInput, {nullable:true})
    cursor?: DecisionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DecisionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DecisionScalarFieldEnum>;
}
