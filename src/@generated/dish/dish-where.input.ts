import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DishMateriaListRelationFilter } from '../dish-materia/dish-materia-list-relation-filter.input';

@InputType()
export class DishWhereInput {

    @Field(() => [DishWhereInput], {nullable:true})
    AND?: Array<DishWhereInput>;

    @Field(() => [DishWhereInput], {nullable:true})
    OR?: Array<DishWhereInput>;

    @Field(() => [DishWhereInput], {nullable:true})
    NOT?: Array<DishWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    guide?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => DishMateriaListRelationFilter, {nullable:true})
    DishMateria?: DishMateriaListRelationFilter;
}
