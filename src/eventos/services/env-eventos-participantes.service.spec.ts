import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosParticipantesService } from './env-eventos-participantes.service';

describe('EnvEventosParticipantesService', () => {
  let service: EnvEventosParticipantesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvEventosParticipantesService],
    }).compile();

    service = module.get<EnvEventosParticipantesService>(EnvEventosParticipantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
