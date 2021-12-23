import { Test, TestingModule } from '@nestjs/testing';
import { ExtTipoDocumentosService } from './ext-tipo-documentos.service';

describe('ExtTipoDocumentosService', () => {
  let service: ExtTipoDocumentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtTipoDocumentosService],
    }).compile();

    service = module.get<ExtTipoDocumentosService>(ExtTipoDocumentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
