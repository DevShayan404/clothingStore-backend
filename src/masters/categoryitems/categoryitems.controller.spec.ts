import { Test, TestingModule } from '@nestjs/testing';
import { CategoryitemsController } from './categoryitems.controller';

describe('CategoryitemsController', () => {
  let controller: CategoryitemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryitemsController],
    }).compile();

    controller = module.get<CategoryitemsController>(CategoryitemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
