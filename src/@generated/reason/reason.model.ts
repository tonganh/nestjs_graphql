import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decision } from '../decision/decision.model';

@ObjectType()
export class Reason {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Int, {nullable:false})
    decisionId!: number;

    @Field(() => Decision, {nullable:false})
    decision?: Decision;
}
