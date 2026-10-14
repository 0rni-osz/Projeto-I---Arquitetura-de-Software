export interface IPaymentMethod {
  processar(valorTotal: number, detalhePagamento: any): boolean;
}