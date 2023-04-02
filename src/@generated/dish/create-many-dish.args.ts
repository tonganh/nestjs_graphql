import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishCreateManyInput } from './dish-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDishArgs {

    @Field(() => [DishCreateManyInput], {nullable:false})
    @Type(() => DishCreateManyInput)
    data!: Array<DishCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
