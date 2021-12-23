import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosService } from './env-eventos.service';

describe('EnvEventosService', () => {
  let service: EnvEventosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvEventosService],
    }).compile();

    service = module.get<EnvEventosService>(EnvEventosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
