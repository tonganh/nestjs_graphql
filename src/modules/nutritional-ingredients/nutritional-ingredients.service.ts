import { DeleteOneNutritionalIngredientsArgs } from './../../@generated/nutritional-ingredients/delete-one-nutritional-ingredients.args';
import { UpdateOneNutritionalIngredientsArgs } from './../../@generated/nutritional-ingredients/update-one-nutritional-ingredients.args';
import { FindFirstNutritionalIngredientsArgs } from './../../@generated/nutritional-ingredients/find-first-nutritional-ingredients.args';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateOneNutritionalIngredientsArgs } from '../../@generated/nutritional-ingredients/create-one-nutritional-ingredients.args';
import { FindManyNutritionalIngredientsArgs } from '../../@generated/nutritional-ingredients/find-many-nutritional-ingredients.args';

@Injectable()
export class NutritionalIngredientsService {
  constructor(private prismaService: PrismaService) {}
  async create(
    createNutritionalIngredientInput: CreateOneNutritionalIngredientsArgs,
  ) {
    return await this.prismaService.nutritionalIngredients.create(
      createNutritionalIngredientInput,
    );
  }

  async findAll(args: FindManyNutritionalIngredientsArgs) {
    return await this.prismaService.nutritionalIngredients.findMany(args);
  }

  async findOne(args: FindFirstNutritionalIngredientsArgs) {
    return await this.prismaService.nutritionalIngredients.findFirst(args);
  }

  async update(args: UpdateOneNutritionalIngredientsArgs) {
    return await this.prismaService.nutritionalIngredients.update(args);
  }

  async remove(args: DeleteOneNutritionalIngredientsArgs) {
    return await this.prismaService.nutritionalIngredients.delete(args);
  }
}
