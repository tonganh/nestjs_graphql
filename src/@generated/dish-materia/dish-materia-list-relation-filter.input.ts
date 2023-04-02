import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaWhereInput } from './dish-materia-where.input';

@InputType()
export class DishMateriaListRelationFilter {

    @Field(() => DishMateriaWhereInput, {nullable:true})
    every?: DishMateriaWhereInput;

    @Field(() => DishMateriaWhereInput, {nullable:true})
    some?: DishMateriaWhereInput;

    @Field(() => DishMateriaWhereInput, {nullable:true})
    none?: DishMateriaWhereInput;
}
