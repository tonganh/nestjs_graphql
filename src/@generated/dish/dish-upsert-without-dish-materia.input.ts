import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishUpdateWithoutDishMateriaInput } from './dish-update-without-dish-materia.input';
import { Type } from 'class-transformer';
import { DishCreateWithoutDishMateriaInput } from './dish-create-without-dish-materia.input';

@InputType()
export class DishUpsertWithoutDishMateriaInput {

    @Field(() => DishUpdateWithoutDishMateriaInput, {nullable:false})
    @Type(() => DishUpdateWithoutDishMateriaInput)
    update!: DishUpdateWithoutDishMateriaInput;

    @Field(() => DishCreateWithoutDishMateriaInput, {nullable:false})
    @Type(() => DishCreateWithoutDishMateriaInput)
    create!: DishCreateWithoutDishMateriaInput;
}
