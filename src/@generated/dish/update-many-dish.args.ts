import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishUpdateManyMutationInput } from './dish-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DishWhereInput } from './dish-where.input';

@ArgsType()
export class UpdateManyDishArgs {

    @Field(() => DishUpdateManyMutationInput, {nullable:false})
    @Type(() => DishUpdateManyMutationInput)
    data!: DishUpdateManyMutationInput;

    @Field(() => DishWhereInput, {nullable:true})
    @Type(() => DishWhereInput)
    where?: DishWhereInput;
}
