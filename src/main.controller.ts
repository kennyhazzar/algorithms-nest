import { Controller, Get, Redirect } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiExcludeController } from '@nestjs/swagger';
import { CommonConfigs } from '@core/types';

@ApiExcludeController()
@Controller()
export class MainController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  @Redirect()
  async trackMainRequest() {
    const { url } = this.configService.get<CommonConfigs>('common');

    return {
      url: `${url}/docs`,
    };
  }
}
