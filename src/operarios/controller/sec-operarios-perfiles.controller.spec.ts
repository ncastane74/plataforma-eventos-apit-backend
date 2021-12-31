import { Test, TestingModule } from '@nestjs/testing';
import { SecOperariosPerfilesController } from './sec-operarios-perfiles.controller';

describe('SecOperariosPerfilesController', () => {
  let controller: SecOperariosPerfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecOperariosPerfilesController],
    }).compile();

    controller = module.get<SecOperariosPerfilesController>(
      SecOperariosPerfilesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
