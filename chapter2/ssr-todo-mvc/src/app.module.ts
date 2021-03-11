import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppModel } from './app.model';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppModel],
})
export class AppModule {}
