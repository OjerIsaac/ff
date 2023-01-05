import mysql from 'mysql';

const config = { 
  connection: mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }),
  migrations: {
    extension: 'ts',
    directory: 'db/migrations',
    tableName: 'users',
  },
  seeds: {
    extension: 'ts',
    directory: 'db/seeds',
  },
}

export default config;