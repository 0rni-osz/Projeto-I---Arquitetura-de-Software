import { IProduct } from './IProduct';

export class DigitalProduct implements IProduct {
  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public tipo: string
  ) {}

  calcularFrete(): number {
    return 0.00; 
  }
}