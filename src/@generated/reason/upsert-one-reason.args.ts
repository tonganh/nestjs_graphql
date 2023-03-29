import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReasonWhereUniqueInput } from './reason-where-unique.input';
import { Type } from 'class-transformer';
import { ReasonCreateInput } from './reason-create.input';
import { ReasonUpdateInput } from './reason-update.input';

@ArgsType()
export class UpsertOneReasonArgs {

    @Field(() => ReasonWhereUniqueInput, {nullable:false})
    @Type(() => ReasonWhereUniqueInput)
    where!: ReasonWhereUniqueInput;

    @Field(() => ReasonCreateInput, {nullable:false})
    @Type(() => ReasonCreateInput)
    create!: ReasonCreateInput;

    @Field(() => ReasonUpdateInput, {nullable:false})
    @Type(() => ReasonUpdateInput)
    update!: ReasonUpdateInput;
}
