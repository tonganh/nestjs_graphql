import { FindFirstNutritionalIngredientsArgs } from './../../@generated/nutritional-ingredients/find-first-nutritional-ingredients.args';
import { NutritionalIngredients } from './../../@generated/nutritional-ingredients/nutritional-ingredients.model';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NutritionalIngredientsService } from './nutritional-ingredients.service';
import { CreateOneNutritionalIngredientsArgs } from '../../@generated/nutritional-ingredients/create-one-nutritional-ingredients.args';
import { FindManyNutritionalIngredientsArgs } from '../../@generated/nutritional-ingredients/find-many-nutritional-ingredients.args';
import { UpdateOneNutritionalIngredientsArgs } from '../../@generated/nutritional-ingredients/update-one-nutritional-ingredients.args';
import { DeleteOneNutritionalIngredientsArgs } from '../../@generated/nutritional-ingredients/delete-one-nutritional-ingredients.args';

@Resolver(() => NutritionalIngredients)
export class NutritionalIngredientsResolver {
  constructor(
    private readonly nutritionalIngredientsService: NutritionalIngredientsService,
  ) {}

  @Mutation(() => NutritionalIngredients)
  createNutritionalIngredient(
    @Args()
    createNutritionalIngredientInput: CreateOneNutritionalIngredientsArgs,
  ) {
    return this.nutritionalIngredientsService.create(
      createNutritionalIngredientInput,
    );
  }

  @Query(() => [NutritionalIngredients], {
    name: 'nutritionalIngredients',
    description: 'Tìm kiếm các thành phần dinh dưỡng',
  })
  findAll(@Args() args: FindManyNutritionalIngredientsArgs) {
    return this.nutritionalIngredientsService.findAll(args);
  }

  @Query(() => NutritionalIngredients, { name: 'nutritionalIngredient' })
  findOne(@Args() args: FindFirstNutritionalIngredientsArgs) {
    return this.nutritionalIngredientsService.findOne(args);
  }

  @Mutation(() => NutritionalIngredients)
  updateNutritionalIngredient(
    @Args()
    updateNutritionalIngredientInput: UpdateOneNutritionalIngredientsArgs,
  ) {
    return this.nutritionalIngredientsService.update(
      updateNutritionalIngredientInput,
    );
  }

  @Mutation(() => NutritionalIngredients)
  removeNutritionalIngredient(
    @Args() args: DeleteOneNutritionalIngredientsArgs,
  ) {
    return this.nutritionalIngredientsService.remove(args);
  }
}
