import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { cashierDTO } from './cashier.dto';
import { CashierService } from './cashier.service';
import { Request, Response } from 'express';

@Controller('cashier')
export class CashierController {
  constructor(private cashierService: CashierService){}

  @Get()
  async showResponse(){
    const dataSet = await this.cashierService.showAllData();
    return {
      statusCode: HttpStatus.OK,
      message: 'Data shown',
      dataSet
    };
  }

  @Get(':name')
  async showByNameResponse(@Param('name') name: string){
    const dataSet = await this.cashierService.findByName(name);

    if(dataSet){
      return {
        statusCode: HttpStatus.OK,
        message: 'Data shown',
        dataSet
      };
    }else{
      throw new HttpException('Name Not Found!', HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  async createResponse(@Body() data: cashierDTO){
    const dataSet = await this.cashierService.addGoodData(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Data delivered',
      dataSet
    };
  }

  @Patch(':name')
  async updateResponse(@Param('name') name: string, @Body() data: Partial<cashierDTO>){
    const dataSet = await this.cashierService.updateGoodData(name, data);
    
    if(dataSet){
      return {
        statusCode: HttpStatus.OK,
        message: 'Data updated',
      };
    }else{
      throw new HttpException('Name Not Found!', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':name')
  async deleteResponse(@Param('name') name: string){
    const dataSet = await this.cashierService.findByName(name);
    
    if(dataSet){
      await this.cashierService.deleteGoodData(name);
      return {
        statusCode: HttpStatus.OK,
        message: 'Data deleted',
      };
    }else{
      throw new HttpException('Name Not Found!', HttpStatus.BAD_REQUEST);
    }
  }
}
