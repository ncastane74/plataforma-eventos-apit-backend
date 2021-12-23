import { Test, TestingModule } from '@nestjs/testing';
import { ExtDepartamentosService } from './ext-departamentos.service';

describe('ExtDepartamentosService', () => {
  let service: ExtDepartamentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtDepartamentosService],
    }).compile();

    service = module.get<ExtDepartamentosService>(ExtDepartamentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
