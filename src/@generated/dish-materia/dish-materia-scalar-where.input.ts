import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class DishMateriaScalarWhereInput {

    @Field(() => [DishMateriaScalarWhereInput], {nullable:true})
    AND?: Array<DishMateriaScalarWhereInput>;

    @Field(() => [DishMateriaScalarWhereInput], {nullable:true})
    OR?: Array<DishMateriaScalarWhereInput>;

    @Field(() => [DishMateriaScalarWhereInput], {nullable:true})
    NOT?: Array<DishMateriaScalarWhereInput>;

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
}
