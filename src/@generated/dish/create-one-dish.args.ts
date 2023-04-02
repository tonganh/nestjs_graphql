import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishCreateInput } from './dish-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDishArgs {

    @Field(() => DishCreateInput, {nullable:false})
    @Type(() => DishCreateInput)
    data!: DishCreateInput;
}
