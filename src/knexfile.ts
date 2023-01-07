import dotenv from 'dotenv';
dotenv.config();
import { Knex } from 'knex';

console.log("Service connected to " + process.env.POSTGRES_DB + " successfully");

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'ejiro',
      password: '123',
      database: 'foodCourtDb'
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
