import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private get products(): [string, string, number][] {
    return [
      ['ce1', 'Headphones', 54.99],
      ['ce2', 'Wireless earphones', 69.99],
      ['ce3', 'Android mobile', 209.99],
      ['ce4', 'iPhone', 649.99],
      ['ce5', 'Smart watch classic', 229.99],
      ['ce6', 'Smart watch', 249.99],
      ['fv1', 'Red pepper', 0.65],
      ['fv2', 'Brockley', 0.95],
      ['fv4', 'Onion', 0.2],
      ['fv3', 'Lemon', 0.2],
      ['fv5', 'Banana', 0.3],
      ['fv6', 'Apple', 0.5],
    ];
  }

  async getAllProducts(): Promise<Record<string, any>[]> {
    return this.products.map(([productId, productName, price]) => ({
      id: productId,
      name: productName,
      price: price,
      formattedPrice: `£${price.toFixed(2)}`,
      category: productId.startsWith('ce')
        ? 'Consumer Electronics'
        : 'Groceries',
      stock: Math.round(10 * Math.random()),
      brand: 'shop brand',
      currencyCode: 'GBP',
      thumbnail: `/images/${productId}.jpg`,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non rhoncus elit. Phasellus in leo molestie, mollis augue sed, ornare lorem.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non rhoncus elit. Phasellus in leo molestie, mollis augue sed, ornare lorem. Nam suscipit id metus in tristique. Mauris d/apibus lorem in molestie egestas. Aliquam efficitur lacinia s/apien vitae facilisis. Sed eu elit lorem. Pellentesque tortor urna, tristique ac sem eu, volutpat mattis lectus. In varius lectus eget nibh fermentum placerat. Vivamus at ligula sodales enim ultrices cursus. Nulla risus mi, sodales sed velit eleifend, convallis consequat orci. Mauris rutrum faucibus est a vehicula. Proin sed quam sit amet lectus commodo scelerisque eu quis est. Cras quis mi ut ligula auctor tempor.',
    }));
  }

  async getOneProduct(id: string): Promise<Record<string, any> | null> {
    return (await this.getAllProducts()).find(item => item.id === id);
  }
}
