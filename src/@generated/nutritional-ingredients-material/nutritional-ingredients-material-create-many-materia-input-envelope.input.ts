import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateManyMateriaInput } from './nutritional-ingredients-material-create-many-materia.input';
import { Type } from 'class-transformer';

@InputType()
export class NutritionalIngredientsMaterialCreateManyMateriaInputEnvelope {

    @Field(() => [NutritionalIngredientsMaterialCreateManyMateriaInput], {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateManyMateriaInput)
    data!: Array<NutritionalIngredientsMaterialCreateManyMateriaInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
