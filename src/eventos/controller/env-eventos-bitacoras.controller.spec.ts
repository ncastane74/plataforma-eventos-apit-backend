import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosBitacorasController } from './env-eventos-bitacoras.controller';

describe('EnvEventosVitacorasController', () => {
  let controller: EnvEventosBitacorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvEventosBitacorasController],
    }).compile();

    controller = module.get<EnvEventosBitacorasController>(EnvEventosBitacorasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
