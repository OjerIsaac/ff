import { knex } from 'knex';

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
export const db = knex(config);
export default config;