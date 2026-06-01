import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
export declare class TransactionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateTransactionDto, cashierId: number): Promise<{
        details: ({
            menu: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string | null;
                categoryId: number;
                price: number;
                stock: number;
            };
        } & {
            id: number;
            createdAt: Date;
            quantity: number;
            subtotal: number;
            menuId: number;
            transactionId: number;
        })[];
        cashier: {
            id: number;
            username: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        status: import("generated/prisma").$Enums.TransactionStatus;
        cashierId: number;
        totalPrice: number;
        paymentMethod: import("generated/prisma").$Enums.PaymentMethod;
    }>;
    findAll(): Promise<({
        details: ({
            menu: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string | null;
                categoryId: number;
                price: number;
                stock: number;
            };
        } & {
            id: number;
            createdAt: Date;
            quantity: number;
            subtotal: number;
            menuId: number;
            transactionId: number;
        })[];
        cashier: {
            id: number;
            username: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        status: import("generated/prisma").$Enums.TransactionStatus;
        cashierId: number;
        totalPrice: number;
        paymentMethod: import("generated/prisma").$Enums.PaymentMethod;
    })[]>;
    findOne(id: number): Promise<{
        details: ({
            menu: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string | null;
                categoryId: number;
                price: number;
                stock: number;
            };
        } & {
            id: number;
            createdAt: Date;
            quantity: number;
            subtotal: number;
            menuId: number;
            transactionId: number;
        })[];
        cashier: {
            id: number;
            username: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerName: string;
        status: import("generated/prisma").$Enums.TransactionStatus;
        cashierId: number;
        totalPrice: number;
        paymentMethod: import("generated/prisma").$Enums.PaymentMethod;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
