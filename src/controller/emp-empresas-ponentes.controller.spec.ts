import { Test, TestingModule } from '@nestjs/testing';
import { EmpEmpresasPonentesController } from './emp-empresas-ponentes.controller';

describe('EmpEmpresasPonentesController', () => {
  let controller: EmpEmpresasPonentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpEmpresasPonentesController],
    }).compile();

    controller = module.get<EmpEmpresasPonentesController>(EmpEmpresasPonentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
