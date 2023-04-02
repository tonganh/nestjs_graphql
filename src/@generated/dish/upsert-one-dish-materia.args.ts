import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishMateriaWhereUniqueInput } from '../dish-materia/dish-materia-where-unique.input';
import { Type } from 'class-transformer';
import { DishMateriaCreateInput } from '../dish-materia/dish-materia-create.input';
import { DishMateriaUpdateInput } from '../dish-materia/dish-materia-update.input';

@ArgsType()
export class UpsertOneDishMateriaArgs {

    @Field(() => DishMateriaWhereUniqueInput, {nullable:false})
    @Type(() => DishMateriaWhereUniqueInput)
    where!: DishMateriaWhereUniqueInput;

    @Field(() => DishMateriaCreateInput, {nullable:false})
    @Type(() => DishMateriaCreateInput)
    create!: DishMateriaCreateInput;

    @Field(() => DishMateriaUpdateInput, {nullable:false})
    @Type(() => DishMateriaUpdateInput)
    update!: DishMateriaUpdateInput;
}
