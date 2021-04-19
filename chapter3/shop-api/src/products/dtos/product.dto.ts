import { IsInt, IsNumber, IsString, IsUUID } from 'class-validator';
import { Product } from '../interfaces/product.interface';

export class ProductDto implements Product {
  /** 
   * @example 'a1234-b1234-c1234-d1234' 
   */
  @IsUUID()
  id: string;

  /** 
   * @example 'Galazy Tab S7' 
   */
  @IsString()
  name: string;

  /** 
   * @example 'Lorem ipsum dolar sit amet.' 
   */
  @IsString()
  description: string;

  /** 
   * @example 799.99 
   */
  @IsNumber()
  price: number;

  /** 
   * @example 100 
   */
  @IsInt()
  stock: number;

  /** 
   * @example '$799.99' 
   */
  @IsString()
  formattedPrice: string;

  /** 
   * @example 'tablet' 
   */
  @IsString()
  category: string;

  /** 
   * @example 'Samsung' 
   */
  @IsString()
  brand: string;

  /** 
   * @example 'USD' 
   */
  @IsString()
  currencyCode: string;

  /** 
   * @example '/images/tablet.png' 
   */
  @IsString()
  thumbnail: string;

  /** 
   * @example 'Lorem ipsum dolar sit amet, consectur elit...' 
   */
  @IsString()
  details: string;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}
