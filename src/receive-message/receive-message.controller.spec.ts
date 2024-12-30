import { Test, TestingModule } from '@nestjs/testing';
import { ReceiveMessageController } from './receive-message.controller';
import { ReceiveMessageService } from './receive-message.service';

describe('ReceiveMessageController', () => {
  let controller: ReceiveMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceiveMessageController],
      providers: [ReceiveMessageService],
    }).compile();

    controller = module.get<ReceiveMessageController>(ReceiveMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
