import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QualitativeUnitUpdateManyMutationInput } from './qualitative-unit-update-many-mutation.input';
import { Type } from 'class-transformer';
import { QualitativeUnitWhereInput } from './qualitative-unit-where.input';

@ArgsType()
export class UpdateManyQualitativeUnitArgs {

    @Field(() => QualitativeUnitUpdateManyMutationInput, {nullable:false})
    @Type(() => QualitativeUnitUpdateManyMutationInput)
    data!: QualitativeUnitUpdateManyMutationInput;

    @Field(() => QualitativeUnitWhereInput, {nullable:true})
    @Type(() => QualitativeUnitWhereInput)
    where?: QualitativeUnitWhereInput;
}
