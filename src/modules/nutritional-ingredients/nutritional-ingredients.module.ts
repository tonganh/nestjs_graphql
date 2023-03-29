import { PrismaService } from 'nestjs-prisma';
import { Module } from '@nestjs/common';
import { NutritionalIngredientsService } from './nutritional-ingredients.service';
import { NutritionalIngredientsResolver } from './nutritional-ingredients.resolver';

@Module({
  providers: [
    NutritionalIngredientsResolver,
    NutritionalIngredientsService,
    PrismaService,
  ],
})
export class NutritionalIngredientsModule {}
