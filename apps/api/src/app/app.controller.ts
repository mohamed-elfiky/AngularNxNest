import { Controller, Get } from '@nestjs/common';

import { Message } from '@demo/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('helloo')
  getData(): Message {
    return this.appService.getData();
  }
}
