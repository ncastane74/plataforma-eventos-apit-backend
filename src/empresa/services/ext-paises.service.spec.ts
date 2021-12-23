import { Test, TestingModule } from '@nestjs/testing';
import { ExtPaisesService } from './ext-paises.service';

describe('ExtPaisesService', () => {
  let service: ExtPaisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtPaisesService],
    }).compile();

    service = module.get<ExtPaisesService>(ExtPaisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
