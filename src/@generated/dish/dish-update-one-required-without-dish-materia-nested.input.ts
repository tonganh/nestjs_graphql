import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishCreateWithoutDishMateriaInput } from './dish-create-without-dish-materia.input';
import { Type } from 'class-transformer';
import { DishCreateOrConnectWithoutDishMateriaInput } from './dish-create-or-connect-without-dish-materia.input';
import { DishUpsertWithoutDishMateriaInput } from './dish-upsert-without-dish-materia.input';
import { DishWhereUniqueInput } from './dish-where-unique.input';
import { DishUpdateWithoutDishMateriaInput } from './dish-update-without-dish-materia.input';

@InputType()
export class DishUpdateOneRequiredWithoutDishMateriaNestedInput {

    @Field(() => DishCreateWithoutDishMateriaInput, {nullable:true})
    @Type(() => DishCreateWithoutDishMateriaInput)
    create?: DishCreateWithoutDishMateriaInput;

    @Field(() => DishCreateOrConnectWithoutDishMateriaInput, {nullable:true})
    @Type(() => DishCreateOrConnectWithoutDishMateriaInput)
    connectOrCreate?: DishCreateOrConnectWithoutDishMateriaInput;

    @Field(() => DishUpsertWithoutDishMateriaInput, {nullable:true})
    @Type(() => DishUpsertWithoutDishMateriaInput)
    upsert?: DishUpsertWithoutDishMateriaInput;

    @Field(() => DishWhereUniqueInput, {nullable:true})
    @Type(() => DishWhereUniqueInput)
    connect?: DishWhereUniqueInput;

    @Field(() => DishUpdateWithoutDishMateriaInput, {nullable:true})
    @Type(() => DishUpdateWithoutDishMateriaInput)
    update?: DishUpdateWithoutDishMateriaInput;
}
