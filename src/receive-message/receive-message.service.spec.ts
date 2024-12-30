import { Test, TestingModule } from '@nestjs/testing';
import { ReceiveMessageService } from './receive-message.service';

describe('ReceiveMessageService', () => {
  let service: ReceiveMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceiveMessageService],
    }).compile();

    service = module.get<ReceiveMessageService>(ReceiveMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
