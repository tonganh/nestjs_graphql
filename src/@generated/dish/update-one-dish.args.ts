import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishUpdateInput } from './dish-update.input';
import { Type } from 'class-transformer';
import { DishWhereUniqueInput } from './dish-where-unique.input';

@ArgsType()
export class UpdateOneDishArgs {

    @Field(() => DishUpdateInput, {nullable:false})
    @Type(() => DishUpdateInput)
    data!: DishUpdateInput;

    @Field(() => DishWhereUniqueInput, {nullable:false})
    @Type(() => DishWhereUniqueInput)
    where!: DishWhereUniqueInput;
}
