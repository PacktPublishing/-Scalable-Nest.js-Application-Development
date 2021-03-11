import { Controller, Get, Param, Header, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')

export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('products')
  @Header('Cache-Control', 'max-age=5, stale-while-revalidate=5')
  @Header('Content-Type', 'application/json')
  async getAllProducts(
    @Query('query') search,
    @Query('offset') offset,
  ): Promise<Record<string, any>[]> {
    return (await this.appService.getAllProducts())
      // .filter(item => (search ? item.name?.includes(search) : true))
      // .slice(
      //   Number(offset) ? Number(offset) * 3 - 1 : 0,
      //   (Number(offset) + 1) * 3 - 1,
      // );
  }

  @Get('products/:id')
  @Header('Content-Type', 'application/json')
  async getOneProduct(@Param('id') id: string): Promise<Record<string, any>> {
    return this.appService.getOneProduct(id);
  }

  // @Get('begin-checkout')
  // @Header('Content-Type', 'application/json')
  // getRequestToken(@Param('id') id: string): Record<string, any> {
  //   console.info('getting checkout token');
  //   return {
  //     token: Math.random()
  //       .toString(32)
  //       .slice(2),
  //   };
  // }
}
