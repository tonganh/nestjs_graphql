import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReasonWhereInput } from './reason-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReasonArgs {

    @Field(() => ReasonWhereInput, {nullable:true})
    @Type(() => ReasonWhereInput)
    where?: ReasonWhereInput;
}
