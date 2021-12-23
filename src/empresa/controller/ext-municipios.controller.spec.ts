import { Test, TestingModule } from '@nestjs/testing';
import { ExtMunicipiosController } from './ext-municipios.controller';

describe('ExtMunicipiosController', () => {
  let controller: ExtMunicipiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtMunicipiosController],
    }).compile();

    controller = module.get<ExtMunicipiosController>(ExtMunicipiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
