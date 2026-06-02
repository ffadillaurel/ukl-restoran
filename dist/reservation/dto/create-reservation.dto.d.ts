import { ReservationStatus } from '../../../generated/prisma/client';
export declare class CreateReservationDto {
    customerName: string;
    phoneNumber: string;
    reservationDate: string;
    totalGuest: number;
    tableNumber: number;
    status?: ReservationStatus;
}
