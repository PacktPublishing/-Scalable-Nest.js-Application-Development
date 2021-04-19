import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiQuery } from '@nestjs/swagger';
import { CreateProductDto } from './dtos/create.product.dto';
import { ProductDto } from './dtos/product.dto';
import { UpdateProductDto } from './dtos/update.product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiQuery({
    name: 'search',
    type: String,
    required: false,
  })
  findAll(@Query('search') searchTerm?: string): ProductDto[] {
    return this.productsService.findAll(searchTerm);
  }

  @Get(':id')
  @ApiNotFoundResponse({ description: 'No product found with ID' })
  findOne(@Param('id') id: string): ProductDto {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
