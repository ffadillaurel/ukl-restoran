export class CreateTransactionDetailItemDto {
  menuId: number;
  quantity: number;
}

export class CreateTransactionDto {
  customerName: string;
  paymentMethod: 'CASH' | 'QRIS' | 'DEBIT';
  details: CreateTransactionDetailItemDto[];
}