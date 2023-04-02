import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateNestedOneWithoutDishMateriaInput } from '../material/material-create-nested-one-without-dish-materia.input';

@InputType()
export class DishMateriaCreateWithoutDishInput {

    @Field(() => String, {nullable:true})
    amountText?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => MaterialCreateNestedOneWithoutDishMateriaInput, {nullable:false})
    material!: MaterialCreateNestedOneWithoutDishMateriaInput;
}
