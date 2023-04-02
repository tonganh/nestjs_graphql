import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaCreateWithoutMaterialInput } from './dish-materia-create-without-material.input';
import { Type } from 'class-transformer';
import { DishMateriaCreateOrConnectWithoutMaterialInput } from './dish-materia-create-or-connect-without-material.input';
import { DishMateriaCreateManyMaterialInputEnvelope } from './dish-materia-create-many-material-input-envelope.input';
import { DishMateriaWhereUniqueInput } from './dish-materia-where-unique.input';

@InputType()
export class DishMateriaUncheckedCreateNestedManyWithoutMaterialInput {

    @Field(() => [DishMateriaCreateWithoutMaterialInput], {nullable:true})
    @Type(() => DishMateriaCreateWithoutMaterialInput)
    create?: Array<DishMateriaCreateWithoutMaterialInput>;

    @Field(() => [DishMateriaCreateOrConnectWithoutMaterialInput], {nullable:true})
    @Type(() => DishMateriaCreateOrConnectWithoutMaterialInput)
    connectOrCreate?: Array<DishMateriaCreateOrConnectWithoutMaterialInput>;

    @Field(() => DishMateriaCreateManyMaterialInputEnvelope, {nullable:true})
    @Type(() => DishMateriaCreateManyMaterialInputEnvelope)
    createMany?: DishMateriaCreateManyMaterialInputEnvelope;

    @Field(() => [DishMateriaWhereUniqueInput], {nullable:true})
    @Type(() => DishMateriaWhereUniqueInput)
    connect?: Array<DishMateriaWhereUniqueInput>;
}
