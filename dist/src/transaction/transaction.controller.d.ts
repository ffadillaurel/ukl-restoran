import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    create(dto: CreateTransactionDto, req: any): Promise<{
        details: ({
            menu: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string | null;
                price: number;
                stock: number;
                image: string | null;
                categoryId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            transactionId: number;
            menuId: number;
            quantity: number;
            subtotal: number;
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
        status: import("../../generated/prisma/enums").TransactionStatus;
        cashierId: number;
        totalPrice: number;
        paymentMethod: import("../../generated/prisma/enums").PaymentMethod;
    }>;
    findAll(): Promise<({
        details: ({
            menu: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string | null;
                price: number;
                stock: number;
                image: string | null;
                categoryId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            transactionId: number;
            menuId: number;
            quantity: number;
            subtotal: number;
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
        status: import("../../generated/prisma/enums").TransactionStatus;
        cashierId: number;
        totalPrice: number;
        paymentMethod: import("../../generated/prisma/enums").PaymentMethod;
    })[]>;
    findOne(id: number): Promise<{
        details: ({
            menu: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string | null;
                price: number;
                stock: number;
                image: string | null;
                categoryId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            transactionId: number;
            menuId: number;
            quantity: number;
            subtotal: number;
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
        status: import("../../generated/prisma/enums").TransactionStatus;
        cashierId: number;
        totalPrice: number;
        paymentMethod: import("../../generated/prisma/enums").PaymentMethod;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
