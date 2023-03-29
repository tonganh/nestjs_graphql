import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecisionCreateWithoutReasonInput } from './decision-create-without-reason.input';
import { Type } from 'class-transformer';
import { DecisionCreateOrConnectWithoutReasonInput } from './decision-create-or-connect-without-reason.input';
import { DecisionWhereUniqueInput } from './decision-where-unique.input';

@InputType()
export class DecisionCreateNestedOneWithoutReasonInput {

    @Field(() => DecisionCreateWithoutReasonInput, {nullable:true})
    @Type(() => DecisionCreateWithoutReasonInput)
    create?: DecisionCreateWithoutReasonInput;

    @Field(() => DecisionCreateOrConnectWithoutReasonInput, {nullable:true})
    @Type(() => DecisionCreateOrConnectWithoutReasonInput)
    connectOrCreate?: DecisionCreateOrConnectWithoutReasonInput;

    @Field(() => DecisionWhereUniqueInput, {nullable:true})
    @Type(() => DecisionWhereUniqueInput)
    connect?: DecisionWhereUniqueInput;
}
