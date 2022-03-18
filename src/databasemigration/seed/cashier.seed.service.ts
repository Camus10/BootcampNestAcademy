import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityCashier } from "src/cashier/cashier.entity";
import { Repository } from "typeorm";

@Injectable()
export class CashierSeedService{
  constructor(@InjectRepository(EntityCashier) private cashierRepository: Repository<EntityCashier>){}
  
  async seed(): Promise<void>{
    const dummyCashier = this.cashierRepository.create({
      name: "Piring",
      price: 1500,
      stock: 12
    });

    await this.cashierRepository.save(dummyCashier);
  }
}