import { Test, TestingModule } from '@nestjs/testing';
import { ExtInstitucionesController } from './ext-instituciones.controller';

describe('ExtInstitucionesController', () => {
  let controller: ExtInstitucionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtInstitucionesController],
    }).compile();

    controller = module.get<ExtInstitucionesController>(ExtInstitucionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
