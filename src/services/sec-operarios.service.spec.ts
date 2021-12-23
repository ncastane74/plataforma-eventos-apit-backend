import { Test, TestingModule } from '@nestjs/testing';
import { SecOperariosService } from './sec-operarios.service';

describe('SecOperariosService', () => {
  let service: SecOperariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecOperariosService],
    }).compile();

    service = module.get<SecOperariosService>(SecOperariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
