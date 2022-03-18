import { NestFactory } from "@nestjs/core";
import { CashierSeedService } from "./cashier.seed.service";
import { SeedModule } from "./seed.module";

async function bootstrap(){
  const appContext = await NestFactory.createApplicationContext(SeedModule);
  const cashierSeeder = appContext.get(CashierSeedService);
  await cashierSeeder.seed();
  await appContext.close();
}
bootstrap();