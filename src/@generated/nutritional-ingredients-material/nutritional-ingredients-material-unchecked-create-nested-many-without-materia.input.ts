import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateWithoutMateriaInput } from './nutritional-ingredients-material-create-without-materia.input';
import { Type } from 'class-transformer';
import { NutritionalIngredientsMaterialCreateOrConnectWithoutMateriaInput } from './nutritional-ingredients-material-create-or-connect-without-materia.input';
import { NutritionalIngredientsMaterialCreateManyMateriaInputEnvelope } from './nutritional-ingredients-material-create-many-materia-input-envelope.input';
import { NutritionalIngredientsMaterialWhereUniqueInput } from './nutritional-ingredients-material-where-unique.input';

@InputType()
export class NutritionalIngredientsMaterialUncheckedCreateNestedManyWithoutMateriaInput {

    @Field(() => [NutritionalIngredientsMaterialCreateWithoutMateriaInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateWithoutMateriaInput)
    create?: Array<NutritionalIngredientsMaterialCreateWithoutMateriaInput>;

    @Field(() => [NutritionalIngredientsMaterialCreateOrConnectWithoutMateriaInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateOrConnectWithoutMateriaInput)
    connectOrCreate?: Array<NutritionalIngredientsMaterialCreateOrConnectWithoutMateriaInput>;

    @Field(() => NutritionalIngredientsMaterialCreateManyMateriaInputEnvelope, {nullable:true})
    @Type(() => NutritionalIngredientsMaterialCreateManyMateriaInputEnvelope)
    createMany?: NutritionalIngredientsMaterialCreateManyMateriaInputEnvelope;

    @Field(() => [NutritionalIngredientsMaterialWhereUniqueInput], {nullable:true})
    @Type(() => NutritionalIngredientsMaterialWhereUniqueInput)
    connect?: Array<NutritionalIngredientsMaterialWhereUniqueInput>;
}
