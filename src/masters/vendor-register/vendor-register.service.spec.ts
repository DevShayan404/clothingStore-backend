import { Test, TestingModule } from '@nestjs/testing';
import { VendorRegisterService } from './vendor-register.service';

describe('VendorRegisterService', () => {
  let service: VendorRegisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorRegisterService],
    }).compile();

    service = module.get<VendorRegisterService>(VendorRegisterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
