import { Test, TestingModule } from '@nestjs/testing';
import { SecPerfilesService } from './sec-perfiles.service';

describe('SecPerfilesService', () => {
  let service: SecPerfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecPerfilesService],
    }).compile();

    service = module.get<SecPerfilesService>(SecPerfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
