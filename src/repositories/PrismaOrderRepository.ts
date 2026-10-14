import { IOrderRepository } from './IOrderRepository';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaOrderRepository implements IOrderRepository {
  async salvar(dadosPedido: any): Promise<any> {
    return await prisma.order.create({
      data: dadosPedido
    });
  }
}