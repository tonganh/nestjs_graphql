import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaScalarWhereInput } from './dish-materia-scalar-where.input';
import { Type } from 'class-transformer';
import { DishMateriaUpdateManyMutationInput } from './dish-materia-update-many-mutation.input';

@InputType()
export class DishMateriaUpdateManyWithWhereWithoutMaterialInput {

    @Field(() => DishMateriaScalarWhereInput, {nullable:false})
    @Type(() => DishMateriaScalarWhereInput)
    where!: DishMateriaScalarWhereInput;

    @Field(() => DishMateriaUpdateManyMutationInput, {nullable:false})
    @Type(() => DishMateriaUpdateManyMutationInput)
    data!: DishMateriaUpdateManyMutationInput;
}
