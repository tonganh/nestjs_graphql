import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialUpdateWithoutDishMateriaInput } from './material-update-without-dish-materia.input';
import { Type } from 'class-transformer';
import { MaterialCreateWithoutDishMateriaInput } from './material-create-without-dish-materia.input';

@InputType()
export class MaterialUpsertWithoutDishMateriaInput {

    @Field(() => MaterialUpdateWithoutDishMateriaInput, {nullable:false})
    @Type(() => MaterialUpdateWithoutDishMateriaInput)
    update!: MaterialUpdateWithoutDishMateriaInput;

    @Field(() => MaterialCreateWithoutDishMateriaInput, {nullable:false})
    @Type(() => MaterialCreateWithoutDishMateriaInput)
    create!: MaterialCreateWithoutDishMateriaInput;
}
