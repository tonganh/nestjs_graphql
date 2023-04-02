import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { MaterialRelationFilter } from '../material/material-relation-filter.input';
import { DishRelationFilter } from '../dish/dish-relation-filter.input';

@InputType()
export class DishMateriaWhereInput {

    @Field(() => [DishMateriaWhereInput], {nullable:true})
    AND?: Array<DishMateriaWhereInput>;

    @Field(() => [DishMateriaWhereInput], {nullable:true})
    OR?: Array<DishMateriaWhereInput>;

    @Field(() => [DishMateriaWhereInput], {nullable:true})
    NOT?: Array<DishMateriaWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    materiaId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    dishId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    amountText?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => MaterialRelationFilter, {nullable:true})
    material?: MaterialRelationFilter;

    @Field(() => DishRelationFilter, {nullable:true})
    dish?: DishRelationFilter;
}
