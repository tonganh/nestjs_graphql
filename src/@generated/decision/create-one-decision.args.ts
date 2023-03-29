import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DecisionCreateInput } from './decision-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDecisionArgs {

    @Field(() => DecisionCreateInput, {nullable:false})
    @Type(() => DecisionCreateInput)
    data!: DecisionCreateInput;
}
