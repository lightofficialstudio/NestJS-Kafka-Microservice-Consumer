import { PartialType } from '@nestjs/mapped-types';
import { CreateReceiveMessageDto } from './create-receive-message.dto';

export class UpdateReceiveMessageDto extends PartialType(CreateReceiveMessageDto) {}
