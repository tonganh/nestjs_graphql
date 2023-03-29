import { Test, TestingModule } from '@nestjs/testing';
import { NutritionalIngredientsService } from './nutritional-ingredients.service';

describe('NutritionalIngredientsService', () => {
  let service: NutritionalIngredientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutritionalIngredientsService],
    }).compile();

    service = module.get<NutritionalIngredientsService>(NutritionalIngredientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
