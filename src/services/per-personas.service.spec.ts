import { Test, TestingModule } from '@nestjs/testing';
import { PerPersonasService } from './per-personas.service';

describe('PerPersonasService', () => {
  let service: PerPersonasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerPersonasService],
    }).compile();

    service = module.get<PerPersonasService>(PerPersonasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
