import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInput } from './nutritional-ingredients-material-create-many-nutritional-ingredients.input';
import { Type } from 'class-transformer';

@InputType()
export class NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInputEnvelope {

    @Field(() => [NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInput], {nullable:false})
    @Type(() => NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInput)
    data!: Array<NutritionalIngredientsMaterialCreateManyNutritionalIngredientsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
