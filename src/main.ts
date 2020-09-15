import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let port = 3003;
  await app.listen(port);
  console.log(`app is running on: http://localhost:${port}`);
}
bootstrap();
