import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EntityCashier } from "src/cashier/cashier.entity";
import databaseConfig from "src/configuration/database.config";
import { CashierSeedService } from "./cashier.seed.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const option = configService.get('database');
        return option;
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([EntityCashier]),
  ],
  providers: [CashierSeedService]
})
export class SeedModule{}