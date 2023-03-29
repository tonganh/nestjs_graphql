import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReasonCreateManyInput } from './reason-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReasonArgs {

    @Field(() => [ReasonCreateManyInput], {nullable:false})
    @Type(() => ReasonCreateManyInput)
    data!: Array<ReasonCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
