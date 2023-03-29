import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { NutritionalIngredientsMaterial } from '../nutritional-ingredients-material/nutritional-ingredients-material.model';
import { QualitativeUnitCount } from './qualitative-unit-count.output';

@ObjectType()
export class QualitativeUnit {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    symbol!: string | null;

    @Field(() => [NutritionalIngredientsMaterial], {nullable:true})
    NutritionalIngredientsMaterial?: Array<NutritionalIngredientsMaterial>;

    @Field(() => QualitativeUnitCount, {nullable:false})
    _count?: QualitativeUnitCount;
}
