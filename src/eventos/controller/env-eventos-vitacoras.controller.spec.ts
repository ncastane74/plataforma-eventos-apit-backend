import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosVitacorasController } from './env-eventos-vitacoras.controller';

describe('EnvEventosVitacorasController', () => {
  let controller: EnvEventosVitacorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvEventosVitacorasController],
    }).compile();

    controller = module.get<EnvEventosVitacorasController>(EnvEventosVitacorasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
