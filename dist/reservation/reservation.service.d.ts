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
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("generated/prisma").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        cashierId: number;
    }>;
    findAll(): Promise<({
        cashier: {
            id: number;
            username: string;
        };
    } & {
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("generated/prisma").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        cashierId: number;
    })[]>;
    findOne(id: number): Promise<{
        cashier: {
            id: number;
            username: string;
        };
    } & {
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("generated/prisma").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        cashierId: number;
    }>;
    findByName(name: string): Promise<({
        cashier: {
            id: number;
            username: string;
        };
    } & {
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("generated/prisma").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        cashierId: number;
    })[]>;
    findByDate(date: string): Promise<({
        cashier: {
            id: number;
            username: string;
        };
    } & {
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("generated/prisma").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        cashierId: number;
    })[]>;
    update(id: number, dto: UpdateReservationDto): Promise<{
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        totalGuest: number;
        tableNumber: number;
        status: import("generated/prisma").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        cashierId: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
