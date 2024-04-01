import { Test, TestingModule } from '@nestjs/testing';
import { VendorRegisterController } from './vendor-register.controller';

describe('VendorRegisterController', () => {
  let controller: VendorRegisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendorRegisterController],
    }).compile();

    controller = module.get<VendorRegisterController>(VendorRegisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
