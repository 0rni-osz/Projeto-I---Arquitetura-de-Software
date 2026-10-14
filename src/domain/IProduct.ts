export interface IProduct {
  id: number;
  nome: string;
  preco: number;
  tipo: string;
  calcularFrete(): number;
}