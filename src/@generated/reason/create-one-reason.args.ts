import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReasonCreateInput } from './reason-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReasonArgs {

    @Field(() => ReasonCreateInput, {nullable:false})
    @Type(() => ReasonCreateInput)
    data!: ReasonCreateInput;
}
