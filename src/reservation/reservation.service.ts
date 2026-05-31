import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateReservationDto, cashierId: number) {
  // Cek apakah meja sudah dipesan di tanggal yang sama
  const start = new Date(`${dto.reservationDate.split('T')[0]}T00:00:00.000Z`);
  const end = new Date(`${dto.reservationDate.split('T')[0]}T23:59:59.999Z`);

  const existing = await this.prisma.reservation.findFirst({
    where: {
      tableNumber: dto.tableNumber,
      reservationDate: { gte: start, lte: end },
    },
  });

  if (existing) {
    throw new ConflictException(
      `Meja ${dto.tableNumber} sudah dipesan pada tanggal tersebut`,
    );
  }

  return this.prisma.reservation.create({
    data: {
      ...dto,
      reservationDate: new Date(dto.reservationDate),
      cashierId,
    },
    include: { cashier: { select: { id: true, username: true } } },
  });
}

  async findAll() {
    return this.prisma.reservation.findMany({
      include: { cashier: { select: { id: true, username: true } } },
    });
  }

  async findOne(id: number) {
    const reservation = await this.prisma.reservation.findUnique({
      where: { id },
      include: { cashier: { select: { id: true, username: true } } },
    });
    if (!reservation) throw new NotFoundException('Reservasi tidak ditemukan');
    return reservation;
  }

  async findByName(name: string) {
    return this.prisma.reservation.findMany({
      where: { customerName: { contains: name } },
      include: { cashier: { select: { id: true, username: true } } },
    });
  }

  async findByDate(date: string) {
  const start = new Date(`${date}T00:00:00.000Z`);
  const end = new Date(`${date}T23:59:59.999Z`);

  return this.prisma.reservation.findMany({
    where: {
      reservationDate: { gte: start, lte: end },
    },
    include: { cashier: { select: { id: true, username: true } } },
  });
}

  async update(id: number, dto: UpdateReservationDto) {
    await this.findOne(id);
    return this.prisma.reservation.update({
      where: { id },
      data: {
        ...dto,
        reservationDate: dto.reservationDate ? new Date(dto.reservationDate) : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.reservation.delete({ where: { id } });
    return { message: 'Reservasi berhasil dihapus' };
  }
}