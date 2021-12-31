import { Test, TestingModule } from '@nestjs/testing';
import { EmpEmpresasPonentesService } from './emp-empresas-ponentes.service';

describe('EmpEmpresasPonentesService', () => {
  let service: EmpEmpresasPonentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpEmpresasPonentesService],
    }).compile();

    service = module.get<EmpEmpresasPonentesService>(
      EmpEmpresasPonentesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
