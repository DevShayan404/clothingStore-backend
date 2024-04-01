import { Test, TestingModule } from '@nestjs/testing';
import { CategoryitemsService } from './categoryitems.service';

describe('CategoryitemsService', () => {
  let service: CategoryitemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryitemsService],
    }).compile();

    service = module.get<CategoryitemsService>(CategoryitemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
