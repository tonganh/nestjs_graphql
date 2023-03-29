import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QualitativeUnitWhereUniqueInput } from './qualitative-unit-where-unique.input';
import { Type } from 'class-transformer';
import { QualitativeUnitCreateInput } from './qualitative-unit-create.input';
import { QualitativeUnitUpdateInput } from './qualitative-unit-update.input';

@ArgsType()
export class UpsertOneQualitativeUnitArgs {

    @Field(() => QualitativeUnitWhereUniqueInput, {nullable:false})
    @Type(() => QualitativeUnitWhereUniqueInput)
    where!: QualitativeUnitWhereUniqueInput;

    @Field(() => QualitativeUnitCreateInput, {nullable:false})
    @Type(() => QualitativeUnitCreateInput)
    create!: QualitativeUnitCreateInput;

    @Field(() => QualitativeUnitUpdateInput, {nullable:false})
    @Type(() => QualitativeUnitUpdateInput)
    update!: QualitativeUnitUpdateInput;
}
