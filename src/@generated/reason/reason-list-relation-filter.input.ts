import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReasonWhereInput } from './reason-where.input';

@InputType()
export class ReasonListRelationFilter {

    @Field(() => ReasonWhereInput, {nullable:true})
    every?: ReasonWhereInput;

    @Field(() => ReasonWhereInput, {nullable:true})
    some?: ReasonWhereInput;

    @Field(() => ReasonWhereInput, {nullable:true})
    none?: ReasonWhereInput;
}
