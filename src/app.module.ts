import { Module } from '@nestjs/common';
import { SearchModule } from './resources/search/search.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { EnvConfig, ThrottlerConfig } from '@core/configs';
import { ConfigModule } from '@nestjs/config';
import { MainController } from './main.controller';

@Module({
  imports: [
    ConfigModule.forRoot(EnvConfig),
    ThrottlerModule.forRootAsync(ThrottlerConfig),
    SearchModule,
  ],
  controllers: [MainController],
  providers: [],
})
export class AppModule {}
