import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Reason } from '../reason/reason.model';
import { DecisionCount } from './decision-count.output';

@ObjectType()
export class Decision {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => [Reason], {nullable:true})
    Reason?: Array<Reason>;

    @Field(() => DecisionCount, {nullable:false})
    _count?: DecisionCount;
}
