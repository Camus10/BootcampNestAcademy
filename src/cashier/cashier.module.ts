import { Module } from '@nestjs/common';
import { CashierService } from './cashier.service';
import { CashierController } from './cashier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityCashier } from './cashier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntityCashier])],
  providers: [CashierService],
  controllers: [CashierController]
})
export class CashierModule {}
