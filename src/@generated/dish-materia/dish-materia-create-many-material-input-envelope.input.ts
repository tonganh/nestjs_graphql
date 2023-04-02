import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DishMateriaCreateManyMaterialInput } from './dish-materia-create-many-material.input';
import { Type } from 'class-transformer';

@InputType()
export class DishMateriaCreateManyMaterialInputEnvelope {

    @Field(() => [DishMateriaCreateManyMaterialInput], {nullable:false})
    @Type(() => DishMateriaCreateManyMaterialInput)
    data!: Array<DishMateriaCreateManyMaterialInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
