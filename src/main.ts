import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifymp = require('fastify-multipart');

async function start() {
  const PORT = process.env.PORT || 4000;

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'verbose', 'debug'],
  });

  const config = new DocumentBuilder()
    .setTitle('kanban-api-service')
    .setDescription('kanban-api-service')
    .setVersion('1.0.0')
    .addTag('AlexUSA')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () =>
    console.log(`EXPRESS - Server started on port = ${PORT}`),
  );
}

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.register(fastifymp as any);
  await app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT, '0.0.0.0', () =>
    console.log(`FASTIFY - Server started on port = ${process.env.PORT}`),
  );
}

if (process.env.FASTIFY_MODE === 'true') {
  bootstrap();
} else {
  start();
}
