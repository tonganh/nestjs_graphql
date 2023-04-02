import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { NutritionalIngredientsMaterialListRelationFilter } from '../nutritional-ingredients-material/nutritional-ingredients-material-list-relation-filter.input';

@InputType()
export class QualitativeUnitWhereInput {

    @Field(() => [QualitativeUnitWhereInput], {nullable:true})
    AND?: Array<QualitativeUnitWhereInput>;

    @Field(() => [QualitativeUnitWhereInput], {nullable:true})
    OR?: Array<QualitativeUnitWhereInput>;

    @Field(() => [QualitativeUnitWhereInput], {nullable:true})
    NOT?: Array<QualitativeUnitWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    symbol?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted?: DateTimeNullableFilter;

    @Field(() => NutritionalIngredientsMaterialListRelationFilter, {nullable:true})
    NutritionalIngredientsMaterial?: NutritionalIngredientsMaterialListRelationFilter;
}
