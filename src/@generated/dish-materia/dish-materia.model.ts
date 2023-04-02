import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Material } from '../material/material.model';
import { Dish } from '../dish/dish.model';

@ObjectType()
export class DishMateria {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    materiaId!: number;

    @Field(() => Int, {nullable:false})
    dishId!: number;

    @Field(() => String, {nullable:true})
    amountText!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Material, {nullable:false})
    material?: Material;

    @Field(() => Dish, {nullable:false})
    dish?: Dish;
}
