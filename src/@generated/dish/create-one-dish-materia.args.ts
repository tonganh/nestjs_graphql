import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishMateriaCreateInput } from '../dish-materia/dish-materia-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDishMateriaArgs {

    @Field(() => DishMateriaCreateInput, {nullable:false})
    @Type(() => DishMateriaCreateInput)
    data!: DishMateriaCreateInput;
}
