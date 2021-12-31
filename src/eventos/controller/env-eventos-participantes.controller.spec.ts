import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosParticipantesController } from './env-eventos-participantes.controller';

describe('EnvEventosParticipantesController', () => {
  let controller: EnvEventosParticipantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvEventosParticipantesController],
    }).compile();

    controller = module.get<EnvEventosParticipantesController>(
      EnvEventosParticipantesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
