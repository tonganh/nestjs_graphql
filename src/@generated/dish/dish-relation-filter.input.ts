import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishWhereInput } from './dish-where.input';

@InputType()
export class DishRelationFilter {

    @Field(() => DishWhereInput, {nullable:true})
    is?: DishWhereInput;

    @Field(() => DishWhereInput, {nullable:true})
    isNot?: DishWhereInput;
}
