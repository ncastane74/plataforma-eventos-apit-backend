import { Test, TestingModule } from '@nestjs/testing';
import { ExtMunicipiosService } from './ext-municipios.service';

describe('ExtMunicipiosService', () => {
  let service: ExtMunicipiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtMunicipiosService],
    }).compile();

    service = module.get<ExtMunicipiosService>(ExtMunicipiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
