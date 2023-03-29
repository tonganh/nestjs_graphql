import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialWhereInput } from './material-where.input';

@InputType()
export class MaterialRelationFilter {

    @Field(() => MaterialWhereInput, {nullable:true})
    is?: MaterialWhereInput;

    @Field(() => MaterialWhereInput, {nullable:true})
    isNot?: MaterialWhereInput;
}
