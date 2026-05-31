import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, UseGuards, Request, Query } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Reservation')
@ApiBearerAuth()
@Controller('reservation')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @Roles('KASIR', 'ADMIN')
  @ApiOperation({ summary: 'Buat reservasi baru (Kasir/Admin)' })
  create(@Body() dto: CreateReservationDto, @Request() req) {
    return this.reservationService.create(dto, req.user.id);
  }

  @Get()
  @Roles('KASIR', 'ADMIN')
  @ApiOperation({ summary: 'Get semua reservasi (Kasir/Admin)' })
  findAll() {
    return this.reservationService.findAll();
  }

  @Get('search')
  @Roles('KASIR', 'ADMIN')
  @ApiOperation({ summary: 'Cari reservasi by nama customer (Kasir/Admin)' })
  findByName(@Query('name') name: string) {
    return this.reservationService.findByName(name);
  }

  @Get('by-date')
  @Roles('KASIR', 'ADMIN')
  @ApiOperation({ summary: 'Get reservasi by tanggal (Kasir/Admin)' })
  findByDate(@Query('date') date: string) {
    return this.reservationService.findByDate(date);
  }

  @Get(':id')
  @Roles('KASIR', 'ADMIN')
  @ApiOperation({ summary: 'Get reservasi by ID (Kasir/Admin)' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reservationService.findOne(id);
  }

  @Put(':id')
  @Roles('KASIR', 'ADMIN')
  @ApiOperation({ summary: 'Update reservasi (Kasir/Admin)' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateReservationDto) {
    return this.reservationService.update(id, dto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Hapus reservasi (Admin only)' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reservationService.remove(id);
  }
}