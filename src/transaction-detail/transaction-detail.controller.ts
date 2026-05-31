import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TransactionDetailService } from './transaction-detail.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Transaction Detail')
@ApiBearerAuth()
@Controller('transaction-detail')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TransactionDetailController {
  constructor(private readonly transactionDetailService: TransactionDetailService) {}

  @Get(':transactionId')
  @Roles('KASIR', 'ADMIN')
  @ApiOperation({ summary: 'Get detail transaksi by transaction ID (Kasir/Admin)' })
  findByTransaction(@Param('transactionId', ParseIntPipe) transactionId: number) {
    return this.transactionDetailService.findByTransaction(transactionId);
  }
}