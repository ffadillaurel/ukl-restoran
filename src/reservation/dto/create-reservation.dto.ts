import { IsString, IsNumber, IsDateString, IsOptional, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { ReservationStatus } from '../../../generated/prisma/client';

export class CreateReservationDto {
  @IsString()
  customerName: string;

  @IsString()
  phoneNumber: string;

  @IsDateString()
  reservationDate: string;

  @Type(() => Number)
  @IsNumber()
  totalGuest: number;

  @Type(() => Number)
  @IsNumber()
  tableNumber: number;

  @IsEnum(ReservationStatus)
  @IsOptional()
  status?: ReservationStatus;
}