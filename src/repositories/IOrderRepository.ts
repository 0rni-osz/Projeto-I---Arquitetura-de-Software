export interface IOrderRepository {
  salvar(dadosPedido: any): Promise<any>;
}