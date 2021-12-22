import { Test, TestingModule } from '@nestjs/testing';
import { EmpEmpresasController } from './emp-empresas.controller';

describe('EmpEmpresasController', () => {
  let controller: EmpEmpresasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpEmpresasController],
    }).compile();

    controller = module.get<EmpEmpresasController>(EmpEmpresasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
