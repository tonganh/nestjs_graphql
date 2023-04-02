import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NutritionalIngredientsMaterialCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    nutritionalIngredientsId?: true;

    @Field(() => Boolean, {nullable:true})
    materialId?: true;

    @Field(() => Boolean, {nullable:true})
    qualitativeUnitId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
