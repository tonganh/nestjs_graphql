import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishMateriaCreateManyInput } from '../dish-materia/dish-materia-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDishMateriaArgs {

    @Field(() => [DishMateriaCreateManyInput], {nullable:false})
    @Type(() => DishMateriaCreateManyInput)
    data!: Array<DishMateriaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
