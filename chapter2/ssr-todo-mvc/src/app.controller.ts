import { Controller, Get, Render } from '@nestjs/common';
import { AppModel } from './app.model';

@Controller()
export class AppController {
  constructor(private readonly appModel: AppModel) {}

  @Get()
  @Render('index')
  root() {
    return {
      pageTitle: 'Todo List',
      items: this.appModel.getTodos(),
    };
  }
}
