import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosBitacorasService } from './env-eventos-bitacoras.service';

describe('EnvEventosBitacorasService', () => {
  let service: EnvEventosBitacorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvEventosBitacorasService],
    }).compile();

    service = module.get<EnvEventosBitacorasService>(
      EnvEventosBitacorasService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
