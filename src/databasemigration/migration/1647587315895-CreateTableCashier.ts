import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableCashier1647587315895 implements MigrationInterface {
    name = 'CreateTableCashier1647587315895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`good\` (\`id_good\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`stock\` int NOT NULL, PRIMARY KEY (\`id_good\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`good\``);
    }

}
