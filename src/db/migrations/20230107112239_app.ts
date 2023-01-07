import { Knex } from 'knex';

async function createUsersTable(knex: Knex, table: Knex.CreateTableBuilder) {
  table.increments('id').primary();
  table.string('username').notNullable();
  table.string('email').unique().notNullable();
  table.string('role').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
}

async function createBrandsTable(knex: Knex, table: Knex.CreateTableBuilder) {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
}

async function createMealsTable(knex: Knex, table: Knex.CreateTableBuilder) {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('description').notNullable();
  table.string('price').notNullable();
  table.string('category').notNullable();
  table.integer('brandId').unsigned().references('brands.id');
  table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
}

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', table => createUsersTable(knex, table));
  await knex.schema.createTable('brands', table => createBrandsTable(knex, table));
  await knex.schema.createTable('meals', table => createMealsTable(knex, table));
  console.log('Tables created!');
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('brands');
  await knex.schema.dropTable('meals');
}