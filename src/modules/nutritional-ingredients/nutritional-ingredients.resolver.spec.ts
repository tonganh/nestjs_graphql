import { Test, TestingModule } from '@nestjs/testing';
import { NutritionalIngredientsResolver } from './nutritional-ingredients.resolver';
import { NutritionalIngredientsService } from './nutritional-ingredients.service';

describe('NutritionalIngredientsResolver', () => {
  let resolver: NutritionalIngredientsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutritionalIngredientsResolver, NutritionalIngredientsService],
    }).compile();

    resolver = module.get<NutritionalIngredientsResolver>(NutritionalIngredientsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
