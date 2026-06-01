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
            categoryId: number;
            image: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        quantity: number;
        subtotal: number;
        menuId: number;
        transactionId: number;
    })[]>;
}
