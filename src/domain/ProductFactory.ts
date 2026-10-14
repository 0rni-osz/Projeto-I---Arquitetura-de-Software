import { IProduct } from './IProduct';
import { PhysicalProduct } from './PhysicalProduct';
import { DigitalProduct } from './DigitalProduct';

export class ProductFactory {
  static create(rawProduct: any): IProduct {
    if (rawProduct.tipo === 'fisico') {
      return new PhysicalProduct(rawProduct.id, rawProduct.nome, rawProduct.preco, rawProduct.tipo, rawProduct.peso);
    } else if (rawProduct.type === 'digital') {
      return new DigitalProduct(rawProduct.id, rawProduct.nome, rawProduct.preco, rawProduct.tipo);
    }
    throw new Error('Tipo de produto desconhecido.');
  }
}