import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosParticipantesEstadosController } from './env-eventos-participantes-estados.controller';

describe('EnvEventosParticipantesEstadosController', () => {
  let controller: EnvEventosParticipantesEstadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvEventosParticipantesEstadosController],
    }).compile();

    controller = module.get<EnvEventosParticipantesEstadosController>(
      EnvEventosParticipantesEstadosController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
