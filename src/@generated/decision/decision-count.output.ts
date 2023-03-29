import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DecisionCount {

    @Field(() => Int, {nullable:false})
    Reason?: number;
}
