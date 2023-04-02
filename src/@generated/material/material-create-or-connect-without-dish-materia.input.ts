import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialCreateWithoutDishMateriaInput } from './material-create-without-dish-materia.input';

@InputType()
export class MaterialCreateOrConnectWithoutDishMateriaInput {

    @Field(() => MaterialWhereUniqueInput, {nullable:false})
    @Type(() => MaterialWhereUniqueInput)
    where!: MaterialWhereUniqueInput;

    @Field(() => MaterialCreateWithoutDishMateriaInput, {nullable:false})
    @Type(() => MaterialCreateWithoutDishMateriaInput)
    create!: MaterialCreateWithoutDishMateriaInput;
}
