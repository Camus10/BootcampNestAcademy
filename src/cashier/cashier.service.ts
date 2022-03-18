import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { cashierDTO } from './cashier.dto';
import { EntityCashier } from './cashier.entity';

/*
  service list :
  - show all
  - find by name
  - create
  - update
  - delete
*/

@Injectable()
export class CashierService {
  constructor(@InjectRepository(EntityCashier) private cashierRepository: Repository<EntityCashier>){}

  async showAllData(){
    return await this.cashierRepository.find();
  }

  async findByName(name: string): Promise<cashierDTO>{
    return await this.cashierRepository.findOne({
      where: {
        name: name,
      }
    });
  }

  async addGoodData(data: cashierDTO){
    const dataSet = this.cashierRepository.create(data);
    await this.cashierRepository.save(data);
    return dataSet;
  }

  async updateGoodData(name: string, data: Partial<cashierDTO>){
    await this.cashierRepository.update({ name }, data);
    return await this.cashierRepository.findOne({ name });
  }

  async deleteGoodData(name: string){
    await this.cashierRepository.delete({ name });
    return {
      delete: true
    };
  }
}
