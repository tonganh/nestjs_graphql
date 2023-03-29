import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReasonUpdateManyMutationInput } from './reason-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReasonWhereInput } from './reason-where.input';

@ArgsType()
export class UpdateManyReasonArgs {

    @Field(() => ReasonUpdateManyMutationInput, {nullable:false})
    @Type(() => ReasonUpdateManyMutationInput)
    data!: ReasonUpdateManyMutationInput;

    @Field(() => ReasonWhereInput, {nullable:true})
    @Type(() => ReasonWhereInput)
    where?: ReasonWhereInput;
}
