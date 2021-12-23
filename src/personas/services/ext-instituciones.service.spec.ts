import { Test, TestingModule } from '@nestjs/testing';
import { ExtInstitucionesService } from './ext-instituciones.service';

describe('ExtInstitucionesService', () => {
  let service: ExtInstitucionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtInstitucionesService],
    }).compile();

    service = module.get<ExtInstitucionesService>(ExtInstitucionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
