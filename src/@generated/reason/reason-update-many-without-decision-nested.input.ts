import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReasonCreateWithoutDecisionInput } from './reason-create-without-decision.input';
import { Type } from 'class-transformer';
import { ReasonCreateOrConnectWithoutDecisionInput } from './reason-create-or-connect-without-decision.input';
import { ReasonUpsertWithWhereUniqueWithoutDecisionInput } from './reason-upsert-with-where-unique-without-decision.input';
import { ReasonCreateManyDecisionInputEnvelope } from './reason-create-many-decision-input-envelope.input';
import { ReasonWhereUniqueInput } from './reason-where-unique.input';
import { ReasonUpdateWithWhereUniqueWithoutDecisionInput } from './reason-update-with-where-unique-without-decision.input';
import { ReasonUpdateManyWithWhereWithoutDecisionInput } from './reason-update-many-with-where-without-decision.input';
import { ReasonScalarWhereInput } from './reason-scalar-where.input';

@InputType()
export class ReasonUpdateManyWithoutDecisionNestedInput {

    @Field(() => [ReasonCreateWithoutDecisionInput], {nullable:true})
    @Type(() => ReasonCreateWithoutDecisionInput)
    create?: Array<ReasonCreateWithoutDecisionInput>;

    @Field(() => [ReasonCreateOrConnectWithoutDecisionInput], {nullable:true})
    @Type(() => ReasonCreateOrConnectWithoutDecisionInput)
    connectOrCreate?: Array<ReasonCreateOrConnectWithoutDecisionInput>;

    @Field(() => [ReasonUpsertWithWhereUniqueWithoutDecisionInput], {nullable:true})
    @Type(() => ReasonUpsertWithWhereUniqueWithoutDecisionInput)
    upsert?: Array<ReasonUpsertWithWhereUniqueWithoutDecisionInput>;

    @Field(() => ReasonCreateManyDecisionInputEnvelope, {nullable:true})
    @Type(() => ReasonCreateManyDecisionInputEnvelope)
    createMany?: ReasonCreateManyDecisionInputEnvelope;

    @Field(() => [ReasonWhereUniqueInput], {nullable:true})
    @Type(() => ReasonWhereUniqueInput)
    set?: Array<ReasonWhereUniqueInput>;

    @Field(() => [ReasonWhereUniqueInput], {nullable:true})
    @Type(() => ReasonWhereUniqueInput)
    disconnect?: Array<ReasonWhereUniqueInput>;

    @Field(() => [ReasonWhereUniqueInput], {nullable:true})
    @Type(() => ReasonWhereUniqueInput)
    delete?: Array<ReasonWhereUniqueInput>;

    @Field(() => [ReasonWhereUniqueInput], {nullable:true})
    @Type(() => ReasonWhereUniqueInput)
    connect?: Array<ReasonWhereUniqueInput>;

    @Field(() => [ReasonUpdateWithWhereUniqueWithoutDecisionInput], {nullable:true})
    @Type(() => ReasonUpdateWithWhereUniqueWithoutDecisionInput)
    update?: Array<ReasonUpdateWithWhereUniqueWithoutDecisionInput>;

    @Field(() => [ReasonUpdateManyWithWhereWithoutDecisionInput], {nullable:true})
    @Type(() => ReasonUpdateManyWithWhereWithoutDecisionInput)
    updateMany?: Array<ReasonUpdateManyWithWhereWithoutDecisionInput>;

    @Field(() => [ReasonScalarWhereInput], {nullable:true})
    @Type(() => ReasonScalarWhereInput)
    deleteMany?: Array<ReasonScalarWhereInput>;
}
