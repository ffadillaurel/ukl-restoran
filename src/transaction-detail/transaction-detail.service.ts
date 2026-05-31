import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransactionDetailService {
  constructor(private prisma: PrismaService) {}

  async findByTransaction(transactionId: number) {
    return this.prisma.transactionDetail.findMany({
      where: { transactionId },
      include: { menu: true },
    });
  }
}