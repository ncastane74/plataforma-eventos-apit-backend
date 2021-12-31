import { Test, TestingModule } from '@nestjs/testing';
import { SecOperariosPerfilesService } from './sec-operarios-perfiles.service';

describe('SecOperariosPerfilesService', () => {
  let service: SecOperariosPerfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecOperariosPerfilesService],
    }).compile();

    service = module.get<SecOperariosPerfilesService>(
      SecOperariosPerfilesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
