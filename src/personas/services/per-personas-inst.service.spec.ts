import { Test, TestingModule } from '@nestjs/testing';
import { PerPersonasInstService } from './per-personas-inst.service';

describe('PerPersonasInstService', () => {
  let service: PerPersonasInstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerPersonasInstService],
    }).compile();

    service = module.get<PerPersonasInstService>(PerPersonasInstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
