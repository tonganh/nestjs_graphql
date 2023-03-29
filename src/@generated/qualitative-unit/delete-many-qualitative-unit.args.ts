import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QualitativeUnitWhereInput } from './qualitative-unit-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyQualitativeUnitArgs {

    @Field(() => QualitativeUnitWhereInput, {nullable:true})
    @Type(() => QualitativeUnitWhereInput)
    where?: QualitativeUnitWhereInput;
}
