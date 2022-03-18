import { Module, Options } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CashierModule } from './cashier/cashier.module';
import configuration from './configuration/configuration';
import databaseConfig from './configuration/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration, databaseConfig],
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
    CashierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
