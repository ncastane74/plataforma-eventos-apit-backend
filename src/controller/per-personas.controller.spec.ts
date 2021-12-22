import { Test, TestingModule } from '@nestjs/testing';
import { PerPersonasController } from './per-personas.controller';

describe('PerPersonasController', () => {
  let controller: PerPersonasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerPersonasController],
    }).compile();

    controller = module.get<PerPersonasController>(PerPersonasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
