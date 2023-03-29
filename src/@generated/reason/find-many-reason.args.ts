import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReasonWhereInput } from './reason-where.input';
import { Type } from 'class-transformer';
import { ReasonOrderByWithRelationInput } from './reason-order-by-with-relation.input';
import { ReasonWhereUniqueInput } from './reason-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReasonScalarFieldEnum } from './reason-scalar-field.enum';

@ArgsType()
export class FindManyReasonArgs {

    @Field(() => ReasonWhereInput, {nullable:true})
    @Type(() => ReasonWhereInput)
    where?: ReasonWhereInput;

    @Field(() => [ReasonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReasonOrderByWithRelationInput>;

    @Field(() => ReasonWhereUniqueInput, {nullable:true})
    cursor?: ReasonWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReasonScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReasonScalarFieldEnum>;
}
