import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReasonUpdateInput } from './reason-update.input';
import { Type } from 'class-transformer';
import { ReasonWhereUniqueInput } from './reason-where-unique.input';

@ArgsType()
export class UpdateOneReasonArgs {

    @Field(() => ReasonUpdateInput, {nullable:false})
    @Type(() => ReasonUpdateInput)
    data!: ReasonUpdateInput;

    @Field(() => ReasonWhereUniqueInput, {nullable:false})
    @Type(() => ReasonWhereUniqueInput)
    where!: ReasonWhereUniqueInput;
}
