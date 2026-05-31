export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly KASIR: "KASIR";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const ReservationStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELLED: "CANCELLED";
};
export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus];
export declare const PaymentMethod: {
    readonly CASH: "CASH";
    readonly QRIS: "QRIS";
    readonly DEBIT: "DEBIT";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const TransactionStatus: {
    readonly PAID: "PAID";
    readonly CANCELLED: "CANCELLED";
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
