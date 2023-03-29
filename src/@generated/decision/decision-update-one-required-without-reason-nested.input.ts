import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecisionCreateWithoutReasonInput } from './decision-create-without-reason.input';
import { Type } from 'class-transformer';
import { DecisionCreateOrConnectWithoutReasonInput } from './decision-create-or-connect-without-reason.input';
import { DecisionUpsertWithoutReasonInput } from './decision-upsert-without-reason.input';
import { DecisionWhereUniqueInput } from './decision-where-unique.input';
import { DecisionUpdateWithoutReasonInput } from './decision-update-without-reason.input';

@InputType()
export class DecisionUpdateOneRequiredWithoutReasonNestedInput {

    @Field(() => DecisionCreateWithoutReasonInput, {nullable:true})
    @Type(() => DecisionCreateWithoutReasonInput)
    create?: DecisionCreateWithoutReasonInput;

    @Field(() => DecisionCreateOrConnectWithoutReasonInput, {nullable:true})
    @Type(() => DecisionCreateOrConnectWithoutReasonInput)
    connectOrCreate?: DecisionCreateOrConnectWithoutReasonInput;

    @Field(() => DecisionUpsertWithoutReasonInput, {nullable:true})
    @Type(() => DecisionUpsertWithoutReasonInput)
    upsert?: DecisionUpsertWithoutReasonInput;

    @Field(() => DecisionWhereUniqueInput, {nullable:true})
    @Type(() => DecisionWhereUniqueInput)
    connect?: DecisionWhereUniqueInput;

    @Field(() => DecisionUpdateWithoutReasonInput, {nullable:true})
    @Type(() => DecisionUpdateWithoutReasonInput)
    update?: DecisionUpdateWithoutReasonInput;
}
