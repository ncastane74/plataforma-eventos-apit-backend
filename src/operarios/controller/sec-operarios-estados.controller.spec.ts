import { Test, TestingModule } from '@nestjs/testing';
import { SecOperariosEstadosController } from './sec-operarios-estados.controller';

describe('SecOperariosEstadosController', () => {
  let controller: SecOperariosEstadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecOperariosEstadosController],
    }).compile();

    controller = module.get<SecOperariosEstadosController>(
      SecOperariosEstadosController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
