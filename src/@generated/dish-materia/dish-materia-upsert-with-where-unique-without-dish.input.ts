import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaWhereUniqueInput } from './dish-materia-where-unique.input';
import { Type } from 'class-transformer';
import { DishMateriaUpdateWithoutDishInput } from './dish-materia-update-without-dish.input';
import { DishMateriaCreateWithoutDishInput } from './dish-materia-create-without-dish.input';

@InputType()
export class DishMateriaUpsertWithWhereUniqueWithoutDishInput {

    @Field(() => DishMateriaWhereUniqueInput, {nullable:false})
    @Type(() => DishMateriaWhereUniqueInput)
    where!: DishMateriaWhereUniqueInput;

    @Field(() => DishMateriaUpdateWithoutDishInput, {nullable:false})
    @Type(() => DishMateriaUpdateWithoutDishInput)
    update!: DishMateriaUpdateWithoutDishInput;

    @Field(() => DishMateriaCreateWithoutDishInput, {nullable:false})
    @Type(() => DishMateriaCreateWithoutDishInput)
    create!: DishMateriaCreateWithoutDishInput;
}
