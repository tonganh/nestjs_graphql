import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishMateriaUpdateInput } from '../dish-materia/dish-materia-update.input';
import { Type } from 'class-transformer';
import { DishMateriaWhereUniqueInput } from '../dish-materia/dish-materia-where-unique.input';

@ArgsType()
export class UpdateOneDishMateriaArgs {

    @Field(() => DishMateriaUpdateInput, {nullable:false})
    @Type(() => DishMateriaUpdateInput)
    data!: DishMateriaUpdateInput;

    @Field(() => DishMateriaWhereUniqueInput, {nullable:false})
    @Type(() => DishMateriaWhereUniqueInput)
    where!: DishMateriaWhereUniqueInput;
}
