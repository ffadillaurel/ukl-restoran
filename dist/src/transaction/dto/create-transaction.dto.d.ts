export declare class CreateTransactionDetailItemDto {
    menuId: number;
    quantity: number;
}
export declare class CreateTransactionDto {
    customerName: string;
    paymentMethod: 'CASH' | 'QRIS' | 'DEBIT';
    details: CreateTransactionDetailItemDto[];
}
