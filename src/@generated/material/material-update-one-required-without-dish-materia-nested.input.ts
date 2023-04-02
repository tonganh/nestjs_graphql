import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialCreateWithoutDishMateriaInput } from './material-create-without-dish-materia.input';
import { Type } from 'class-transformer';
import { MaterialCreateOrConnectWithoutDishMateriaInput } from './material-create-or-connect-without-dish-materia.input';
import { MaterialUpsertWithoutDishMateriaInput } from './material-upsert-without-dish-materia.input';
import { MaterialWhereUniqueInput } from './material-where-unique.input';
import { MaterialUpdateWithoutDishMateriaInput } from './material-update-without-dish-materia.input';

@InputType()
export class MaterialUpdateOneRequiredWithoutDishMateriaNestedInput {

    @Field(() => MaterialCreateWithoutDishMateriaInput, {nullable:true})
    @Type(() => MaterialCreateWithoutDishMateriaInput)
    create?: MaterialCreateWithoutDishMateriaInput;

    @Field(() => MaterialCreateOrConnectWithoutDishMateriaInput, {nullable:true})
    @Type(() => MaterialCreateOrConnectWithoutDishMateriaInput)
    connectOrCreate?: MaterialCreateOrConnectWithoutDishMateriaInput;

    @Field(() => MaterialUpsertWithoutDishMateriaInput, {nullable:true})
    @Type(() => MaterialUpsertWithoutDishMateriaInput)
    upsert?: MaterialUpsertWithoutDishMateriaInput;

    @Field(() => MaterialWhereUniqueInput, {nullable:true})
    @Type(() => MaterialWhereUniqueInput)
    connect?: MaterialWhereUniqueInput;

    @Field(() => MaterialUpdateWithoutDishMateriaInput, {nullable:true})
    @Type(() => MaterialUpdateWithoutDishMateriaInput)
    update?: MaterialUpdateWithoutDishMateriaInput;
}
