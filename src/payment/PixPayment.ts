import { IPaymentMethod } from './IPaymentMethod';

export class PixPayment implements IPaymentMethod {
  processar(valorTotal: number, detalhePagamento: any): boolean {
    return true;
  }
}