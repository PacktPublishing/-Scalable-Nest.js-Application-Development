import { IsInt, IsNumber, IsString, IsUUID } from 'class-validator';
import { Product } from '../interfaces/product.interface';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto implements Product {
  @IsUUID()
  @ApiProperty({
    type: String,
    example: 'a1234-b1234-c1234-d1234'
  })
  id: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'Galazy Tab S7'
  })
  name: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'Lorem ipsum dolar sit amet.'
  })
  description: string;

  @IsNumber()
  @ApiProperty({
    type: Number,
    example: 799.99
  })
  price: number;

  @IsInt()
  @ApiProperty({
    type: Number,
    example: 100
  })
  stock: number;

  @IsString()
  @ApiProperty({
    type: String,
    example: '$799.99'
  })
  formattedPrice: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'tablet'
  })
  category: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'Samsung'
  })
  brand: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'USD'
  })
  currencyCode: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: '/images/tablet.png'
  })
  thumbnail: string;
  
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Lorem ipsum dolar sit amet, consectur elit...'
  })
  details: string;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}
