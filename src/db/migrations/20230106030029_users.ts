import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("name", 255).notNullable();
        table.string("email", 255).notNullable();
        table.string("role", 255).notNullable();
        table
        .timestamp("created_at")
        .defaultTo(knex.fn.now())
        .notNullable();
        table
        .timestamp("updated_at")
        .defaultTo(knex.fn.now())
        .notNullable();
    });
}
    
export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("users");
}

