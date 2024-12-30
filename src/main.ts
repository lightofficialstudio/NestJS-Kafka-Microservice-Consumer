import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { config } from 'dotenv';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  const kafkaMicroservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:9092'],
        clientId: 'nestjs-client',
      },
      consumer: {
        groupId: 'nestjs-consumer-group',
        sessionTimeout: 30000,
        heartbeatInterval: 10000,
      },
    },
  });

  try {
    app.enableCors();
    await app.startAllMicroservices();
    await app.listen(process.env.PORT);
    console.log('APP IS RUNNING ON PORT :', process.env.PORT);
    const kafkaClient = app.get('KAFKA_SERVICE');


  } catch (error) {
    console.error('Error starting microservices', error);
  }
}
bootstrap();
