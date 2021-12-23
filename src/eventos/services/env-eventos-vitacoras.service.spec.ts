import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosVitacorasService } from './env-eventos-vitacoras.service';

describe('EnvEventosVitacorasService', () => {
  let service: EnvEventosVitacorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvEventosVitacorasService],
    }).compile();

    service = module.get<EnvEventosVitacorasService>(EnvEventosVitacorasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
