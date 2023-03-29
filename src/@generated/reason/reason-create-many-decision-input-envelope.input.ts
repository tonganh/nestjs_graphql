import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReasonCreateManyDecisionInput } from './reason-create-many-decision.input';
import { Type } from 'class-transformer';

@InputType()
export class ReasonCreateManyDecisionInputEnvelope {

    @Field(() => [ReasonCreateManyDecisionInput], {nullable:false})
    @Type(() => ReasonCreateManyDecisionInput)
    data!: Array<ReasonCreateManyDecisionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
