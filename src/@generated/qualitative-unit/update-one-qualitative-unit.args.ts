import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QualitativeUnitUpdateInput } from './qualitative-unit-update.input';
import { Type } from 'class-transformer';
import { QualitativeUnitWhereUniqueInput } from './qualitative-unit-where-unique.input';

@ArgsType()
export class UpdateOneQualitativeUnitArgs {

    @Field(() => QualitativeUnitUpdateInput, {nullable:false})
    @Type(() => QualitativeUnitUpdateInput)
    data!: QualitativeUnitUpdateInput;

    @Field(() => QualitativeUnitWhereUniqueInput, {nullable:false})
    @Type(() => QualitativeUnitWhereUniqueInput)
    where!: QualitativeUnitWhereUniqueInput;
}
