import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateWithoutMateriaInput } from './nutritional-ingredients-material-create-without-materia.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialCreateOrConnectWithoutMateriaInput } from './nutritional-ingredients-material-create-or-connect-without-materia.input';
import { NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutMateriaInput } from './nutritional-ingredients-material-upsert-with-where-unique-without-materia.input';
import { NutritionalIngredientsMaterialCreateManyMateriaInputEnvelope } from './nutritional-ingredients-material-create-many-materia-input-envelope.input';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';
import { NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutMateriaInput } from './nutritional-ingredients-material-update-with-where-unique-without-materia.input';
import { NutritionalIngredientsMaterialUpdateManyWithWhereWithoutMateriaInput } from './nutritional-ingredients-material-update-many-with-where-without-materia.input';
import { NutritionalIngredientsMaterialScalarWhereInput } from './nutritional-ingredients-material-scalar-where.input';

@InputType()
export class NutritionalIngredientsMaterialUpdateManyWithoutMateriaNestedInput {

    @Field(() => [NutritionalIngredientsMaterialCreateWithoutMateriaInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutMateriaInput)
    create?: Array<NutritionalIngredientsMaterialCreateWithoutMateriaInput>;

    @Field(() => [NutritionalIngredientsMaterialCreateOrConnectWithoutMateriaInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateOrConnectWithoutMateriaInput)
    connectOrCreate?: Array<NutritionalIngredientsMaterialCreateOrConnectWithoutMateriaInput>;

    @Field(() => [NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutMateriaInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutMateriaInput)
    upsert?: Array<NutritionalIngredientsMaterialUpsertWithWhereUniqueWithoutMateriaInput>;

    @Field(() => NutritionalIngredientsMaterialCreateManyMateriaInputEnvelope, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateManyMateriaInputEnvelope)
    createMany?: NutritionalIngredientsMaterialCreateManyMateriaInputEnvelope;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    set?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    disconnect?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    delete?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    connect?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;

    @Field(() => [NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutMateriaInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutMateriaInput)
    update?: Array<NutritionalIngredientsMaterialUpdateWithWhereUniqueWithoutMateriaInput>;

    @Field(() => [NutritionalIngredientsMaterialUpdateManyWithWhereWithoutMateriaInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialUpdateManyWithWhereWithoutMateriaInput)
    updateMany?: Array<NutritionalIngredientsMaterialUpdateManyWithWhereWithoutMateriaInput>;

    @Field(() => [NutritionalIngredientsMaterialScalarWhereInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialScalarWhereInput)
    deleteMany?: Array<NutritionalIngredientsMaterialScalarWhereInput>;
}
