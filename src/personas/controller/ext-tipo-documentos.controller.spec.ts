import { Test, TestingModule } from '@nestjs/testing';
import { ExtTipoDocumentosController } from './ext-tipo-documentos.controller';

describe('ExtTipoDocumentosController', () => {
  let controller: ExtTipoDocumentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtTipoDocumentosController],
    }).compile();

    controller = module.get<ExtTipoDocumentosController>(ExtTipoDocumentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
