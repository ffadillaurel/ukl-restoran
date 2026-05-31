import { PrismaService } from '../prisma/prisma.service';
export declare class TransactionDetailService {
    private prisma;
    constructor(prisma: PrismaService);
    findByTransaction(transactionId: number): Promise<({
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
    })[]>;
}
