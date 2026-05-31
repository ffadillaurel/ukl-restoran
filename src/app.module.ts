import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { MenuModule } from './menu/menu.module';
import { ReservationModule } from './reservation/reservation.module';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionDetailModule } from './transaction-detail/transaction-detail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    CategoryModule,
    MenuModule,
    ReservationModule,
    TransactionModule,
    TransactionDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}