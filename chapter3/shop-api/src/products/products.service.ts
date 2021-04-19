import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dtos/create.product.dto';
import { UpdateProductDto } from './dtos/update.product.dto';
import { v4 as uuid } from 'uuid';
import { CurrencySymbols } from 'src/core/constants';
import { ProductDto } from './dtos/product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(newProduct: CreateProductDto): ProductDto {
    const id = uuid();
    const currencyCode = newProduct.currencyCode || CurrencySymbols.DEFAULT;
    this.products.push({
      id,
      formattedPrice: `${currencyCode} ${newProduct.price}`,
      ...newProduct,
    });
    return this.findOne(id);
  }

  findAll(searchTerm: string): ProductDto[] {
    if (searchTerm) {
      return this.products.filter(item => item.name.includes(searchTerm));
    }
    return this.products;
  }

  findOne(id: string): ProductDto {
    const product = this.products.find(item => item.id === id);
    if (product) {
      return product;
    }
    throw new NotFoundException('Product not found');
  }

  update(id: string, modification: UpdateProductDto): ProductDto {
    this.products = this.products.map(item =>
      item.id === id ? { ...item, ...modification } : item,
    );

    return this.findOne(id);
  }

  remove(id: string): string {
    this.products = this.products.filter(item => item.id !== id);

    return id;
  }
}
