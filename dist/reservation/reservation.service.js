"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReservationService = class ReservationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, cashierId) {
        const start = new Date(`${dto.reservationDate.split('T')[0]}T00:00:00.000Z`);
        const end = new Date(`${dto.reservationDate.split('T')[0]}T23:59:59.999Z`);
        const existing = await this.prisma.reservation.findFirst({
            where: {
                tableNumber: dto.tableNumber,
                reservationDate: { gte: start, lte: end },
            },
        });
        if (existing) {
            throw new common_1.ConflictException(`Meja ${dto.tableNumber} sudah dipesan pada tanggal tersebut`);
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
    async findOne(id) {
        const reservation = await this.prisma.reservation.findUnique({
            where: { id },
            include: { cashier: { select: { id: true, username: true } } },
        });
        if (!reservation)
            throw new common_1.NotFoundException('Reservasi tidak ditemukan');
        return reservation;
    }
    async findByName(name) {
        return this.prisma.reservation.findMany({
            where: { customerName: { contains: name } },
            include: { cashier: { select: { id: true, username: true } } },
        });
    }
    async findByDate(date) {
        const start = new Date(`${date}T00:00:00.000Z`);
        const end = new Date(`${date}T23:59:59.999Z`);
        return this.prisma.reservation.findMany({
            where: {
                reservationDate: { gte: start, lte: end },
            },
            include: { cashier: { select: { id: true, username: true } } },
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.reservation.update({
            where: { id },
            data: {
                ...dto,
                reservationDate: dto.reservationDate ? new Date(dto.reservationDate) : undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.reservation.delete({ where: { id } });
        return { message: 'Reservasi berhasil dihapus' };
    }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReservationService);
//# sourceMappingURL=reservation.service.js.map