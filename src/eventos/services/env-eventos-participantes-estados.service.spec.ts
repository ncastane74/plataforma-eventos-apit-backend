import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosParticipantesEstadosService } from './env-eventos-participantes-estados.service';

describe('EnvEventosParticipantesEstadosService', () => {
  let service: EnvEventosParticipantesEstadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvEventosParticipantesEstadosService],
    }).compile();

    service = module.get<EnvEventosParticipantesEstadosService>(
      EnvEventosParticipantesEstadosService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
