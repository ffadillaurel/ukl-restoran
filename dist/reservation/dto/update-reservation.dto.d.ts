export declare class UpdateReservationDto {
    customerName?: string;
    phoneNumber?: string;
    reservationDate?: string;
    totalGuest?: number;
    tableNumber?: number;
    status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}
