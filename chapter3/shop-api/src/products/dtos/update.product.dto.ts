import { OmitType } from '@nestjs/swagger';
import { ProductDto } from './product.dto';

export class UpdateProductDto extends OmitType(ProductDto, [
  'id',
  'formattedPrice',
] as const) {}
