import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MaterialSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
