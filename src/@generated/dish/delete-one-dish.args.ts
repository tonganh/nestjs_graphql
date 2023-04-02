import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishWhereUniqueInput } from './dish-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDishArgs {

    @Field(() => DishWhereUniqueInput, {nullable:false})
    @Type(() => DishWhereUniqueInput)
    where!: DishWhereUniqueInput;
}
