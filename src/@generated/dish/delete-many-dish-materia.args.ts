import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishMateriaWhereInput } from '../dish-materia/dish-materia-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDishMateriaArgs {

    @Field(() => DishMateriaWhereInput, {nullable:true})
    @Type(() => DishMateriaWhereInput)
    where?: DishMateriaWhereInput;
}
