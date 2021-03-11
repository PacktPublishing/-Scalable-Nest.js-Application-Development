import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import next from 'next';

@Injectable()
export class WebService {
  private nextApp;
  private requestHandler;

  constructor(private configService: ConfigService) {
    this.nextApp = next({
      dev: configService.get('isDev'),
      dir: configService.get('clientDir'),
    });

    this.nextApp.prepare().then(() => {
      this.requestHandler = this.nextApp.getRequestHandler()
    });
  }

  render(
    req: Request,
    res: Response,
    pathname: string,
    query: Request['query'],
  ): Promise<void> {
    return this.nextApp.render(req, res, pathname, query);
  }

  handle(req: Request, res: Response): Promise<any> {
    return this.requestHandler(req, res);
  }
}
