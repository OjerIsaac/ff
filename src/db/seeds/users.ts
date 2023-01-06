import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: 1, name: "isaac", email: "e@f.com", role: "0" },
        { id: 2, name: "isaac2", email: "c@f.com", role: "1"},
        { id: 3, name: "isaac3", email: "d@f.com", role: "0" }
    ]);
};
