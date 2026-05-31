import { PrismaService } from '../prisma/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
export declare class ReservationService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateReservationDto, cashierId: number): Promise<{
        cashier: {
            id: number;
            username: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("../../generated/prisma/enums").ReservationStatus;
        cashierId: number;
    }>;
    findAll(): Promise<({
        cashier: {
            id: number;
            username: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("../../generated/prisma/enums").ReservationStatus;
        cashierId: number;
    })[]>;
    findOne(id: number): Promise<{
        cashier: {
            id: number;
            username: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("../../generated/prisma/enums").ReservationStatus;
        cashierId: number;
    }>;
    findByName(name: string): Promise<({
        cashier: {
            id: number;
            username: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("../../generated/prisma/enums").ReservationStatus;
        cashierId: number;
    })[]>;
    findByDate(date: string): Promise<({
        cashier: {
            id: number;
            username: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("../../generated/prisma/enums").ReservationStatus;
        cashierId: number;
    })[]>;
    update(id: number, dto: UpdateReservationDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("../../generated/prisma/enums").ReservationStatus;
        cashierId: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
