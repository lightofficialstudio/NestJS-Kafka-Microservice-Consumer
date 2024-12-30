import { Injectable } from '@nestjs/common';
import { CreateReceiveMessageDto } from './dto/create-receive-message.dto';
import { UpdateReceiveMessageDto } from './dto/update-receive-message.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class ReceiveMessageService {


  @MessagePattern('my-topic')
  handleIncomingMessage(@Payload() message: string) {
    console.log('RECEIVE MESSAGE : ', message);
  }

  create(createReceiveMessageDto: CreateReceiveMessageDto) {
    return 'This action adds a new receiveMessage';
  }

  findAll() {
    return `This action returns all receiveMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receiveMessage`;
  }

  update(id: number, updateReceiveMessageDto: UpdateReceiveMessageDto) {
    return `This action updates a #${id} receiveMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} receiveMessage`;
  }
}
