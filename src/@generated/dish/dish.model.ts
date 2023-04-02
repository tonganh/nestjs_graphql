import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DishMateria } from '../dish-materia/dish-materia.model';
import { DishCount } from './dish-count.output';

@ObjectType()
export class Dish {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => String, {nullable:true})
    guide!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [DishMateria], {nullable:true})
    DishMateria?: Array<DishMateria>;

    @Field(() => DishCount, {nullable:false})
    _count?: DishCount;
}
