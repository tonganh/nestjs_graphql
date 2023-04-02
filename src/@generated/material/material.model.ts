import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { NutritionalIngredientsMaterial } from '../nutritional-ingredients-material/nutritional-ingredients-material.model';
import { DishMateria } from '../dish-materia/dish-materia.model';
import { MaterialCount } from './material-count.output';

@ObjectType()
export class Material {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    imgUrl!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => [NutritionalIngredientsMaterial], {nullable:true})
    NutritionalIngredientsMaterial?: Array<NutritionalIngredientsMaterial>;

    @Field(() => [DishMateria], {nullable:true})
    DishMateria?: Array<DishMateria>;

    @Field(() => MaterialCount, {nullable:false})
    _count?: MaterialCount;
}
