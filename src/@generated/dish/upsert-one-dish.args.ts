import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishWhereUniqueInput } from './dish-where-unique.input';
import { Type } from 'class-transformer';
import { DishCreateInput } from './dish-create.input';
import { DishUpdateInput } from './dish-update.input';

@ArgsType()
export class UpsertOneDishArgs {

    @Field(() => DishWhereUniqueInput, {nullable:false})
    @Type(() => DishWhereUniqueInput)
    where!: DishWhereUniqueInput;

    @Field(() => DishCreateInput, {nullable:false})
    @Type(() => DishCreateInput)
    create!: DishCreateInput;

    @Field(() => DishUpdateInput, {nullable:false})
    @Type(() => DishUpdateInput)
    update!: DishUpdateInput;
}
