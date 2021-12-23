import { Test, TestingModule } from '@nestjs/testing';
import { ExtDepartamentosController } from './ext-departamentos.controller';

describe('ExtDepartamentosController', () => {
  let controller: ExtDepartamentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtDepartamentosController],
    }).compile();

    controller = module.get<ExtDepartamentosController>(ExtDepartamentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
