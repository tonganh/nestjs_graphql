import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateWithoutDishMateriaInput } from './material-create-without-dish-materia.input';
import { Type } from 'class-transformer';
import { MaterialCreateOrConnectWithoutDishMateriaInput } from './material-create-or-connect-without-dish-materia.input';
import { MaterialWhereUniqueInput } from './material-where-unique.input';

@InputType()
export class MaterialCreateNestedOneWithoutDishMateriaInput {

    @Field(() => MaterialCreateWithoutDishMateriaInput, {nullable:true})
    @Type(() => MaterialCreateWithoutDishMateriaInput)
    create?: MaterialCreateWithoutDishMateriaInput;

    @Field(() => MaterialCreateOrConnectWithoutDishMateriaInput, {nullable:true})
    @Type(() => MaterialCreateOrConnectWithoutDishMateriaInput)
    connectOrCreate?: MaterialCreateOrConnectWithoutDishMateriaInput;

    @Field(() => MaterialWhereUniqueInput, {nullable:true})
    @Type(() => MaterialWhereUniqueInput)
    connect?: MaterialWhereUniqueInput;
}
