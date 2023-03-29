import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DecisionCreateManyInput } from './decision-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDecisionArgs {

    @Field(() => [DecisionCreateManyInput], {nullable:false})
    @Type(() => DecisionCreateManyInput)
    data!: Array<DecisionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
