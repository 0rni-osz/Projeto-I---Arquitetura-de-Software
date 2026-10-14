import { IProduct } from './IProduct';

export class PhysicalProduct implements IProduct {
  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public tipo: string,
    public peso: number
  ) {}

  calcularFrete(): number {
    return 10.00;
  }
}