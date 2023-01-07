import { Knex } from 'knex';

async function createUsersTable(table: Knex.CreateTableBuilder) {
  table.increments('id').primary();
  table.string('username').notNullable();
  table.string('email').unique().notNullable();
  table.string('password').notNullable();
}

async function createPostsTable(table: Knex.CreateTableBuilder) {
  table.increments('id').primary();
  table.string('title').notNullable();
  table.string('content').notNullable();
  table.integer('userId').unsigned().references('users.id');
}

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', createUsersTable);
  await knex.schema.createTable('posts', createPostsTable);
  console.log('Tables created!');
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
