import { Test, TestingModule } from '@nestjs/testing';
import { SecOperariosEstadosService } from './sec-operarios-estados.service';

describe('SecOperariosEstadosService', () => {
  let service: SecOperariosEstadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecOperariosEstadosService],
    }).compile();

    service = module.get<SecOperariosEstadosService>(
      SecOperariosEstadosService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
