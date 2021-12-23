import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosEstadosService } from './env-eventos-estados.service';

describe('EnvEventosEstadosService', () => {
  let service: EnvEventosEstadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvEventosEstadosService],
    }).compile();

    service = module.get<EnvEventosEstadosService>(EnvEventosEstadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
