import { Test, TestingModule } from '@nestjs/testing';
import { SecPerfilesController } from './sec-perfiles.controller';

describe('SecPerfilesController', () => {
  let controller: SecPerfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecPerfilesController],
    }).compile();

    controller = module.get<SecPerfilesController>(SecPerfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
