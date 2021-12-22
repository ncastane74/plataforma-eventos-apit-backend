import { Test, TestingModule } from '@nestjs/testing';
import { ExtPaisesController } from './ext-paises.controller';

describe('ExtPaisesController', () => {
  let controller: ExtPaisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtPaisesController],
    }).compile();

    controller = module.get<ExtPaisesController>(ExtPaisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
