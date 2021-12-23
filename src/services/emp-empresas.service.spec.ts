import { Test, TestingModule } from '@nestjs/testing';
import { EmpEmpresasService } from './emp-empresas.service';

describe('EmpEmpresasService', () => {
  let service: EmpEmpresasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpEmpresasService],
    }).compile();

    service = module.get<EmpEmpresasService>(EmpEmpresasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
