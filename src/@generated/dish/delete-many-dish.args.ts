import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishWhereInput } from './dish-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDishArgs {

    @Field(() => DishWhereInput, {nullable:true})
    @Type(() => DishWhereInput)
    where?: DishWhereInput;
}
