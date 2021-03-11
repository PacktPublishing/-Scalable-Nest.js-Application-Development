import { Controller, Get, Req, Res, Header } from '@nestjs/common';
import { Request, Response } from 'express';
import { WebService } from './web.service';

@Controller()
export class WebController {
  constructor(private readonly webService: WebService) {}

  @Get('*')
  @Header('Cache-Control', 'max-age=300')
  async getPages(@Req() req: Request, @Res() res: Response): Promise<any> {
    return await this.webService.render(req, res, req.path, req.query);
  }

  @Get('/_next/*')
  @Header('Cache-Control', 'max-age=300')
  async getStaticAssets(@Req() req: Request, @Res() res: Response) {
    return await this.webService.handle(req, res);
  }
}
