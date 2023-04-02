import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaCreateManyDishInput } from './dish-materia-create-many-dish.input';
import { Type } from 'class-transformer';

@InputType()
export class DishMateriaCreateManyDishInputEnvelope {

    @Field(() => [DishMateriaCreateManyDishInput], {nullable:false})
    @Type(() => DishMateriaCreateManyDishInput)
    data!: Array<DishMateriaCreateManyDishInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
