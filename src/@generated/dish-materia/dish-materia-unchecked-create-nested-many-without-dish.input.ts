import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaCreateWithoutDishInput } from './dish-materia-create-without-dish.input';
import { Type } from 'class-transformer';
import { DishMateriaCreateOrConnectWithoutDishInput } from './dish-materia-create-or-connect-without-dish.input';
import { DishMateriaCreateManyDishInputEnvelope } from './dish-materia-create-many-dish-input-envelope.input';
import { DishMateriaWhereUniqueInput } from './dish-materia-where-unique.input';

@InputType()
export class DishMateriaUncheckedCreateNestedManyWithoutDishInput {

    @Field(() => [DishMateriaCreateWithoutDishInput], {nullable:true})
    @Type(() => DishMateriaCreateWithoutDishInput)
    create?: Array<DishMateriaCreateWithoutDishInput>;

    @Field(() => [DishMateriaCreateOrConnectWithoutDishInput], {nullable:true})
    @Type(() => DishMateriaCreateOrConnectWithoutDishInput)
    connectOrCreate?: Array<DishMateriaCreateOrConnectWithoutDishInput>;

    @Field(() => DishMateriaCreateManyDishInputEnvelope, {nullable:true})
    @Type(() => DishMateriaCreateManyDishInputEnvelope)
    createMany?: DishMateriaCreateManyDishInputEnvelope;

    @Field(() => [DishMateriaWhereUniqueInput], {nullable:true})
    @Type(() => DishMateriaWhereUniqueInput)
    connect?: Array<DishMateriaWhereUniqueInput>;
}
