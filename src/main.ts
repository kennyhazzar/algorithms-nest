import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const docsConfig = new DocumentBuilder()
    .setTitle('Коллекция алгоритмов')
    .setDescription(
      'В этом приложении я собираю коллекцию популярных алгоритмов с примерами. Будет пополняться',
    )
    .addTag('algs')
    .build();

  const document = SwaggerModule.createDocument(app, docsConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000); // TODO!: Add .env
}
bootstrap();
