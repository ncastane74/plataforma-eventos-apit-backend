import { Test, TestingModule } from '@nestjs/testing';
import { EnvEventosController } from './env-eventos.controller';

describe('EnvEventosController', () => {
  let controller: EnvEventosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvEventosController],
    }).compile();

    controller = module.get<EnvEventosController>(EnvEventosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
