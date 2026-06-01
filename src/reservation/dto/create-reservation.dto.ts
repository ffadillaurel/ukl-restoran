import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

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

  @IsString()
  @IsOptional()
  status?: string;
}