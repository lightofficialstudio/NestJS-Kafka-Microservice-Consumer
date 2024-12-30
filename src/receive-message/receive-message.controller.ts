import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReceiveMessageService } from './receive-message.service';
import { CreateReceiveMessageDto } from './dto/create-receive-message.dto';
import { UpdateReceiveMessageDto } from './dto/update-receive-message.dto';

@Controller('receive-message')
export class ReceiveMessageController {
  constructor(private readonly receiveMessageService: ReceiveMessageService) { }

  @Post()
  create(@Body() createReceiveMessageDto: CreateReceiveMessageDto) {
    return this.receiveMessageService.create(createReceiveMessageDto);
  }

  @Get()
  findAll() {
    return this.receiveMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receiveMessageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceiveMessageDto: UpdateReceiveMessageDto) {
    return this.receiveMessageService.update(+id, updateReceiveMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receiveMessageService.remove(+id);
  }
}
