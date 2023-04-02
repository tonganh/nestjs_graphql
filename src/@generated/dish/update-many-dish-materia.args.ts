import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishMateriaUpdateManyMutationInput } from '../dish-materia/dish-materia-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DishMateriaWhereInput } from '../dish-materia/dish-materia-where.input';

@ArgsType()
export class UpdateManyDishMateriaArgs {

    @Field(() => DishMateriaUpdateManyMutationInput, {nullable:false})
    @Type(() => DishMateriaUpdateManyMutationInput)
    data!: DishMateriaUpdateManyMutationInput;

    @Field(() => DishMateriaWhereInput, {nullable:true})
    @Type(() => DishMateriaWhereInput)
    where?: DishMateriaWhereInput;
}
