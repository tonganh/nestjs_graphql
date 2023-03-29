import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QualitativeUnitCreateManyInput } from './qualitative-unit-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyQualitativeUnitArgs {

    @Field(() => [QualitativeUnitCreateManyInput], {nullable:false})
    @Type(() => QualitativeUnitCreateManyInput)
    data!: Array<QualitativeUnitCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
