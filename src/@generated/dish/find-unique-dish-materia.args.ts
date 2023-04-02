import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishMateriaWhereUniqueInput } from '../dish-materia/dish-materia-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDishMateriaArgs {

    @Field(() => DishMateriaWhereUniqueInput, {nullable:false})
    @Type(() => DishMateriaWhereUniqueInput)
    where!: DishMateriaWhereUniqueInput;
}
