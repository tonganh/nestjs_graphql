import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QualitativeUnitWhereInput } from './qualitative-unit-where.input';
import { Type } from 'class-transformer';
import { QualitativeUnitOrderByWithRelationInput } from './qualitative-unit-order-by-with-relation.input';
import { QualitativeUnitWhereUniqueInput } from './qualitative-unit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QualitativeUnitScalarFieldEnum } from './qualitative-unit-scalar-field.enum';

@ArgsType()
export class FindFirstQualitativeUnitArgs {

    @Field(() => QualitativeUnitWhereInput, {nullable:true})
    @Type(() => QualitativeUnitWhereInput)
    where?: QualitativeUnitWhereInput;

    @Field(() => [QualitativeUnitOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QualitativeUnitOrderByWithRelationInput>;

    @Field(() => QualitativeUnitWhereUniqueInput, {nullable:true})
    cursor?: QualitativeUnitWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [QualitativeUnitScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof QualitativeUnitScalarFieldEnum>;
}
