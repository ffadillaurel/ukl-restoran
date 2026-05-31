import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTransactionDto, cashierId: number) {
    const menuIds = dto.details.map(d => d.menuId);
    const menus = await this.prisma.menu.findMany({ where: { id: { in: menuIds } } });

    let totalPrice = 0;
    const details = dto.details.map(d => {
      const menu = menus.find(m => m.id === d.menuId);
      if (!menu) throw new NotFoundException(`Menu id ${d.menuId} tidak ditemukan`);
      const subtotal = menu.price * d.quantity;
      totalPrice += subtotal;
      return { menuId: d.menuId, quantity: d.quantity, subtotal };
    });

    return this.prisma.transaction.create({
      data: {
        customerName: dto.customerName,
        paymentMethod: dto.paymentMethod,
        totalPrice,
        cashierId,
        details: { create: details },
      },
      include: {
        details: { include: { menu: true } },
        cashier: { select: { id: true, username: true } },
      },
    });
  }

  async findAll() {
    return this.prisma.transaction.findMany({
      include: {
        details: { include: { menu: true } },
        cashier: { select: { id: true, username: true } },
      },
    });
  }

  async findOne(id: number) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
      include: {
        details: { include: { menu: true } },
        cashier: { select: { id: true, username: true } },
      },
    });
    if (!transaction) throw new NotFoundException('Transaksi tidak ditemukan');
    return transaction;
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.transaction.delete({ where: { id } });
    return { message: 'Transaksi berhasil dihapus' };
  }
}