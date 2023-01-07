import { Knex } from 'knex';

async function createUsersTable(table: Knex.CreateTableBuilder) {
  table.increments('id').primary();
  table.string('username').notNullable();
  table.string('email').unique().notNullable();
  table.string('role').notNullable();
}

async function createBrandsTable(table: Knex.CreateTableBuilder) {
  table.increments('id').primary();
  table.string('name').notNullable();
}

async function createMealsTable(table: Knex.CreateTableBuilder) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('price').notNullable();
    table.string('caategory').notNullable();
    table.integer('brandId').unsigned().references('brands.id');
}

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', createUsersTable);
  await knex.schema.createTable('brands', createBrandsTable);
  await knex.schema.createTable('meals', createMealsTable);
  console.log('Tables created!');
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('brands');
  await knex.schema.dropTable('meals');
}