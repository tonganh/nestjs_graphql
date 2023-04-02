import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishWhereInput } from './dish-where.input';
import { Type } from 'class-transformer';
import { DishOrderByWithRelationInput } from './dish-order-by-with-relation.input';
import { DishWhereUniqueInput } from './dish-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DishScalarFieldEnum } from './dish-scalar-field.enum';

@ArgsType()
export class FindFirstDishOrThrowArgs {

    @Field(() => DishWhereInput, {nullable:true})
    @Type(() => DishWhereInput)
    where?: DishWhereInput;

    @Field(() => [DishOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DishOrderByWithRelationInput>;

    @Field(() => DishWhereUniqueInput, {nullable:true})
    cursor?: DishWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DishScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DishScalarFieldEnum>;
}
