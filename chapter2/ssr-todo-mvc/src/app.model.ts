import { Injectable } from '@nestjs/common';

@Injectable()
export class AppModel {
  getTodos(): string[] {
    
    return Math.random() > 0.5 ? [
      'Todo Item 1',
      'Todo Item 2',
      'Todo Item 3'
    ] : [];
  }
}
