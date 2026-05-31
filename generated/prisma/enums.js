"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatus = exports.PaymentMethod = exports.ReservationStatus = exports.UserRole = void 0;
exports.UserRole = {
    ADMIN: 'ADMIN',
    KASIR: 'KASIR'
};
exports.ReservationStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    CANCELLED: 'CANCELLED'
};
exports.PaymentMethod = {
    CASH: 'CASH',
    QRIS: 'QRIS',
    DEBIT: 'DEBIT'
};
exports.TransactionStatus = {
    PAID: 'PAID',
    CANCELLED: 'CANCELLED'
};
//# sourceMappingURL=enums.js.map