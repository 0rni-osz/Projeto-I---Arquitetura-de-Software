import { IPaymentMethod } from './IPaymentMethod';

export class CreditCardPayment implements IPaymentMethod {
  processar(valorTotal: number, detalhePagamento: any): boolean {
    return true;
  }
}