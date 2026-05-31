import { TransactionDetailService } from './transaction-detail.service';
export declare class TransactionDetailController {
    private readonly transactionDetailService;
    constructor(transactionDetailService: TransactionDetailService);
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
