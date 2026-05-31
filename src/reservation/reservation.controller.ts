import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, UseGuards, Request, Query } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('reservation')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @Roles('KASIR', 'ADMIN')
  create(@Body() dto: CreateReservationDto, @Request() req) {
    return this.reservationService.create(dto, req.user.id);
  }

  @Get()
  @Roles('KASIR', 'ADMIN')
  findAll() {
    return this.reservationService.findAll();
  }

  @Get('search')
  @Roles('KASIR', 'ADMIN')
  findByName(@Query('name') name: string) {
    return this.reservationService.findByName(name);
  }

  @Get('by-date')
  @Roles('KASIR', 'ADMIN')
  findByDate(@Query('date') date: string) {
    return this.reservationService.findByDate(date);
  }

  @Get(':id')
  @Roles('KASIR', 'ADMIN')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reservationService.findOne(id);
  }

  @Put(':id')
  @Roles('KASIR', 'ADMIN')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateReservationDto) {
    return this.reservationService.update(id, dto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reservationService.remove(id);
  }
}