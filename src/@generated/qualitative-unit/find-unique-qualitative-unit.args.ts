import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QualitativeUnitWhereUniqueInput } from './qualitative-unit-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueQualitativeUnitArgs {

    @Field(() => QualitativeUnitWhereUniqueInput, {nullable:false})
    @Type(() => QualitativeUnitWhereUniqueInput)
    where!: QualitativeUnitWhereUniqueInput;
}
