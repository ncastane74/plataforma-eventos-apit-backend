import { Test, TestingModule } from '@nestjs/testing';
import { SecOperariosController } from './sec-operarios.controller';

describe('SecOperariosController', () => {
  let controller: SecOperariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecOperariosController],
    }).compile();

    controller = module.get<SecOperariosController>(SecOperariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
