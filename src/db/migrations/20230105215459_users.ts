import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    const exists = await knex.schema.hasTable('user');
    if (!exists) {
        await knex.schema.createTable('user', (table) => {
            table.increments('id').primary();
            table.string('firstName');
            table.string('lastName');
            table.string('email');
            table.string('password');
            table.string('username');
        });
        console.log('created user table');
    }
}


export async function down(knex: Knex): Promise<void> {
}

