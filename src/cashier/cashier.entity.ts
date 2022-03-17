import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('good')
export class EntityCashier{
  @PrimaryGeneratedColumn()
  id_good: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stock: number; 
}