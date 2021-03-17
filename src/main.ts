import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// nestjs는 main.ts를 가져, 무조건 이 이름어야 한다.
// 보이는것처럼 기본함수를 가진다.
// 함수이름은 아무거나 써도 됨
// 하는일? await NestFactory.create(AppModule)을 호출하고 어플리케이션은 3000포트를 리스닝하고있다.
