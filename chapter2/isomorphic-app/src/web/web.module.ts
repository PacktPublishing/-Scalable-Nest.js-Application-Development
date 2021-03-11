import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WebController } from './web.controller';
import { WebService } from './web.service';
import configuration from './web.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [WebController],
  providers: [
    WebService,
  ],
})
export class WebModule {}
