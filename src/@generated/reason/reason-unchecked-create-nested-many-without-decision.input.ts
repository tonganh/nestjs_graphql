import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReasonCreateWithoutDecisionInput } from './reason-create-without-decision.input';
import { Type } from 'class-transformer';
import { ReasonCreateOrConnectWithoutDecisionInput } from './reason-create-or-connect-without-decision.input';
import { ReasonCreateManyDecisionInputEnvelope } from './reason-create-many-decision-input-envelope.input';
import { ReasonWhereUniqueInput } from './reason-where-unique.input';

@InputType()
export class ReasonUncheckedCreateNestedManyWithoutDecisionInput {

    @Field(() => [ReasonCreateWithoutDecisionInput], {nullable:true})
    @Type(() => ReasonCreateWithoutDecisionInput)
    create?: Array<ReasonCreateWithoutDecisionInput>;

    @Field(() => [ReasonCreateOrConnectWithoutDecisionInput], {nullable:true})
    @Type(() => ReasonCreateOrConnectWithoutDecisionInput)
    connectOrCreate?: Array<ReasonCreateOrConnectWithoutDecisionInput>;

    @Field(() => ReasonCreateManyDecisionInputEnvelope, {nullable:true})
    @Type(() => ReasonCreateManyDecisionInputEnvelope)
    createMany?: ReasonCreateManyDecisionInputEnvelope;

    @Field(() => [ReasonWhereUniqueInput], {nullable:true})
    @Type(() => ReasonWhereUniqueInput)
    connect?: Array<ReasonWhereUniqueInput>;
}
