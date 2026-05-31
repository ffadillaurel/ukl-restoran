import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe, UseGuards, Request } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Transaction')
@ApiBearerAuth()
@Controller('transaction')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @Roles('KASIR', 'ADMIN')
  @ApiOperation({ summary: 'Buat transaksi baru (Kasir/Admin)' })
  create(@Body() dto: CreateTransactionDto, @Request() req) {
    return this.transactionService.create(dto, req.user.id);
  }

  @Get()
  @Roles('KASIR', 'ADMIN')
  @ApiOperation({ summary: 'Get semua transaksi (Kasir/Admin)' })
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  @Roles('KASIR', 'ADMIN')
  @ApiOperation({ summary: 'Get transaksi by ID (Kasir/Admin)' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transactionService.findOne(id);
  }

  @Delete(':id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Hapus transaksi (Admin only)' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.transactionService.remove(id);
  }
}