import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosEstadosController } from './env-eventos-estados.controller';

describe('EnvEventosEstadosController', () => {
  let controller: EnvEventosEstadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvEventosEstadosController],
    }).compile();

    controller = module.get<EnvEventosEstadosController>(
      EnvEventosEstadosController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
