import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaCreateWithoutDishInput } from './dish-materia-create-without-dish.input';
import { Type } from 'class-transformer';
import { DishMateriaCreateOrConnectWithoutDishInput } from './dish-materia-create-or-connect-without-dish.input';
import { DishMateriaUpsertWithWhereUniqueWithoutDishInput } from './dish-materia-upsert-with-where-unique-without-dish.input';
import { DishMateriaCreateManyDishInputEnvelope } from './dish-materia-create-many-dish-input-envelope.input';
import { DishMateriaWhereUniqueInput } from './dish-materia-where-unique.input';
import { DishMateriaUpdateWithWhereUniqueWithoutDishInput } from './dish-materia-update-with-where-unique-without-dish.input';
import { DishMateriaUpdateManyWithWhereWithoutDishInput } from './dish-materia-update-many-with-where-without-dish.input';
import { DishMateriaScalarWhereInput } from './dish-materia-scalar-where.input';

@InputType()
export class DishMateriaUpdateManyWithoutDishNestedInput {

    @Field(() => [DishMateriaCreateWithoutDishInput], {nullable:true})
    @Type(() => DishMateriaCreateWithoutDishInput)
    create?: Array<DishMateriaCreateWithoutDishInput>;

    @Field(() => [DishMateriaCreateOrConnectWithoutDishInput], {nullable:true})
    @Type(() => DishMateriaCreateOrConnectWithoutDishInput)
    connectOrCreate?: Array<DishMateriaCreateOrConnectWithoutDishInput>;

    @Field(() => [DishMateriaUpsertWithWhereUniqueWithoutDishInput], {nullable:true})
    @Type(() => DishMateriaUpsertWithWhereUniqueWithoutDishInput)
    upsert?: Array<DishMateriaUpsertWithWhereUniqueWithoutDishInput>;

    @Field(() => DishMateriaCreateManyDishInputEnvelope, {nullable:true})
    @Type(() => DishMateriaCreateManyDishInputEnvelope)
    createMany?: DishMateriaCreateManyDishInputEnvelope;

    @Field(() => [DishMateriaWhereUniqueInput], {nullable:true})
    @Type(() => DishMateriaWhereUniqueInput)
    set?: Array<DishMateriaWhereUniqueInput>;

    @Field(() => [DishMateriaWhereUniqueInput], {nullable:true})
    @Type(() => DishMateriaWhereUniqueInput)
    disconnect?: Array<DishMateriaWhereUniqueInput>;

    @Field(() => [DishMateriaWhereUniqueInput], {nullable:true})
    @Type(() => DishMateriaWhereUniqueInput)
    delete?: Array<DishMateriaWhereUniqueInput>;

    @Field(() => [DishMateriaWhereUniqueInput], {nullable:true})
    @Type(() => DishMateriaWhereUniqueInput)
    connect?: Array<DishMateriaWhereUniqueInput>;

    @Field(() => [DishMateriaUpdateWithWhereUniqueWithoutDishInput], {nullable:true})
    @Type(() => DishMateriaUpdateWithWhereUniqueWithoutDishInput)
    update?: Array<DishMateriaUpdateWithWhereUniqueWithoutDishInput>;

    @Field(() => [DishMateriaUpdateManyWithWhereWithoutDishInput], {nullable:true})
    @Type(() => DishMateriaUpdateManyWithWhereWithoutDishInput)
    updateMany?: Array<DishMateriaUpdateManyWithWhereWithoutDishInput>;

    @Field(() => [DishMateriaScalarWhereInput], {nullable:true})
    @Type(() => DishMateriaScalarWhereInput)
    deleteMany?: Array<DishMateriaScalarWhereInput>;
}
