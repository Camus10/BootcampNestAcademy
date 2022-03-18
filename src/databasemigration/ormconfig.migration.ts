import { EntityCashier } from "src/cashier/cashier.entity";
import databaseConfig from "src/configuration/database.config";

module.exports = {
  type: 'mysql',
  host: databaseConfig().host,
  port: databaseConfig().port,
  username: databaseConfig().username,
  password: databaseConfig().password,
  database: databaseConfig().database,
  synchronize: false,
  entities: [EntityCashier],
  migrations: ['src/databasemigration/migration/*.ts'],
  cli: {
    migrationsDir: 'src/databasemigration/migration'
  }
}