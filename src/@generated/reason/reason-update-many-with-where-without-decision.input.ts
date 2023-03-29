import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReasonScalarWhereInput } from './reason-scalar-where.input';
import { Type } from 'class-transformer';
import { ReasonUpdateManyMutationInput } from './reason-update-many-mutation.input';

@InputType()
export class ReasonUpdateManyWithWhereWithoutDecisionInput {

    @Field(() => ReasonScalarWhereInput, {nullable:false})
    @Type(() => ReasonScalarWhereInput)
    where!: ReasonScalarWhereInput;

    @Field(() => ReasonUpdateManyMutationInput, {nullable:false})
    @Type(() => ReasonUpdateManyMutationInput)
    data!: ReasonUpdateManyMutationInput;
}
