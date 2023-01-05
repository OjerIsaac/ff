import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table: any) => {
    table.increments('id');
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
  });
//   await knex.schema.createTable('products', (table) => {
//     table.increments('id');
//     table.decimal('price').notNullable();
//     table.string('name', 1000).notNullable();
//   });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('products');
//   await knex.schema.dropTable('users');
}

export const config = { transaction: false };
