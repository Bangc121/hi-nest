import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 유저들이 보낸거를 우리가 원하는 실제 타입으로 변환해준다.
    }),
  );
  await app.listen(3000);
}
bootstrap();

// nestjs는 main.ts를 가져, 무조건 이 이름어야 한다.
// 보이는것처럼 기본함수를 가진다.
// 함수이름은 아무거나 써도 됨
// 하는일? await NestFactory.create(AppModule)을 호출하고 어플리케이션은 3000포트를 리스닝하고있다.

// ValidationPipe 유효성 검사를 해준다.

// class의 유효성 검사  npm i class-validator class-transformer
