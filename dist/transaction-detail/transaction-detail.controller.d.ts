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
