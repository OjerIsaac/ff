import dotenv from 'dotenv';
dotenv.config();
import { Knex } from 'knex';

console.log("Service connected to " + process.env.MYSQL_DB + " successfully");

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      insecureAuth: true,
      host: 'localhost',
      user: 'postgres',
      password: '123',
      database: 'foodCourtDb',
    },
    migrations: {
      extension: 'ts',
      directory: 'db/migrations',
      tableName: 'migrations_history',
    },
    seeds: {
      extension: 'ts',
      directory: 'db/seeds',
    },
  },
};

export default config;
