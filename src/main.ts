import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });

  // Increase payload size limit
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ limit: '5mb', extended: true }));

  const config = new DocumentBuilder()
    .setTitle('clothingStore')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('clothing', app, document);

  // Enable CORS
  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  });

  await app.listen(3000);
}
bootstrap();
