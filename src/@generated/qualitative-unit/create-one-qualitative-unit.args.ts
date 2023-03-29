import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QualitativeUnitCreateInput } from './qualitative-unit-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneQualitativeUnitArgs {

    @Field(() => QualitativeUnitCreateInput, {nullable:false})
    @Type(() => QualitativeUnitCreateInput)
    data!: QualitativeUnitCreateInput;
}
