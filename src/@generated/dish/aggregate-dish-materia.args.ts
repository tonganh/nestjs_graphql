import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishMateriaWhereInput } from '../dish-materia/dish-materia-where.input';
import { Type } from 'class-transformer';
import { DishMateriaOrderByWithRelationInput } from '../dish-materia/dish-materia-order-by-with-relation.input';
import { DishMateriaWhereUniqueInput } from '../dish-materia/dish-materia-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateDishMateriaArgs {

    @Field(() => DishMateriaWhereInput, {nullable:true})
    @Type(() => DishMateriaWhereInput)
    where?: DishMateriaWhereInput;

    @Field(() => [DishMateriaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DishMateriaOrderByWithRelationInput>;

    @Field(() => DishMateriaWhereUniqueInput, {nullable:true})
    cursor?: DishMateriaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
