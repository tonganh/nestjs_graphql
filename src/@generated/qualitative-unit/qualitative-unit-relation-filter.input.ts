import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QualitativeUnitWhereInput } from './qualitative-unit-where.input';

@InputType()
export class QualitativeUnitRelationFilter {

    @Field(() => QualitativeUnitWhereInput, {nullable:true})
    is?: QualitativeUnitWhereInput;

    @Field(() => QualitativeUnitWhereInput, {nullable:true})
    isNot?: QualitativeUnitWhereInput;
}
