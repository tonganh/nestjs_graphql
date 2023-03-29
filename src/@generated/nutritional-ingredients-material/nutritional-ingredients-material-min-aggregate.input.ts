import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NutritionalIngredientsMaterialMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    nutritionalIngredientsId?: true;

    @Field(() => Boolean, {nullable:true})
    materialId?: true;

    @Field(() => Boolean, {nullable:true})
    qualitativeUnitId?: true;
}
