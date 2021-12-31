import { Test, TestingModule } from '@nestjs/testing';
import { PerPersonasInstController } from './per-personas-inst.controller';

describe('PerPersonasInstController', () => {
  let controller: PerPersonasInstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerPersonasInstController],
    }).compile();

    controller = module.get<PerPersonasInstController>(
      PerPersonasInstController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
