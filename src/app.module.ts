import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ReceiveMessageModule } from './receive-message/receive-message.module';
import { ReceiveMessageController } from './receive-message/receive-message.controller';
import { ReceiveMessageService } from './receive-message/receive-message.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['kafka:9092'],
            clientId: 'nestjs-client',
          },
        },
      },
    ]),
    ReceiveMessageModule,],
  controllers: [AppController, ReceiveMessageController],
  providers: [AppService, ReceiveMessageService],
})
export class AppModule { }
