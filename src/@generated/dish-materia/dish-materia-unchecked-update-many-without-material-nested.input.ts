import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaCreateWithoutMaterialInput } from './dish-materia-create-without-material.input';
import { Type } from 'class-transformer';
import { DishMateriaCreateOrConnectWithoutMaterialInput } from './dish-materia-create-or-connect-without-material.input';
import { DishMateriaUpsertWithWhereUniqueWithoutMaterialInput } from './dish-materia-upsert-with-where-unique-without-material.input';
import { DishMateriaCreateManyMaterialInputEnvelope } from './dish-materia-create-many-material-input-envelope.input';
import { DishMateriaWhereUniqueInput } from './dish-materia-where-unique.input';
import { DishMateriaUpdateWithWhereUniqueWithoutMaterialInput } from './dish-materia-update-with-where-unique-without-material.input';
import { DishMateriaUpdateManyWithWhereWithoutMaterialInput } from './dish-materia-update-many-with-where-without-material.input';
import { DishMateriaScalarWhereInput } from './dish-materia-scalar-where.input';

@InputType()
export class DishMateriaUncheckedUpdateManyWithoutMaterialNestedInput {

    @Field(() => [DishMateriaCreateWithoutMaterialInput], {nullable:true})
    @Type(() => DishMateriaCreateWithoutMaterialInput)
    create?: Array<DishMateriaCreateWithoutMaterialInput>;

    @Field(() => [DishMateriaCreateOrConnectWithoutMaterialInput], {nullable:true})
    @Type(() => DishMateriaCreateOrConnectWithoutMaterialInput)
    connectOrCreate?: Array<DishMateriaCreateOrConnectWithoutMaterialInput>;

    @Field(() => [DishMateriaUpsertWithWhereUniqueWithoutMaterialInput], {nullable:true})
    @Type(() => DishMateriaUpsertWithWhereUniqueWithoutMaterialInput)
    upsert?: Array<DishMateriaUpsertWithWhereUniqueWithoutMaterialInput>;

    @Field(() => DishMateriaCreateManyMaterialInputEnvelope, {nullable:true})
    @Type(() => DishMateriaCreateManyMaterialInputEnvelope)
    createMany?: DishMateriaCreateManyMaterialInputEnvelope;

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

    @Field(() => [DishMateriaUpdateWithWhereUniqueWithoutMaterialInput], {nullable:true})
    @Type(() => DishMateriaUpdateWithWhereUniqueWithoutMaterialInput)
    update?: Array<DishMateriaUpdateWithWhereUniqueWithoutMaterialInput>;

    @Field(() => [DishMateriaUpdateManyWithWhereWithoutMaterialInput], {nullable:true})
    @Type(() => DishMateriaUpdateManyWithWhereWithoutMaterialInput)
    updateMany?: Array<DishMateriaUpdateManyWithWhereWithoutMaterialInput>;

    @Field(() => [DishMateriaScalarWhereInput], {nullable:true})
    @Type(() => DishMateriaScalarWhereInput)
    deleteMany?: Array<DishMateriaScalarWhereInput>;
}
