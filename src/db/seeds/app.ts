import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    { username: 'user1', email: 'user1@example.com', role: 'user' },
    { username: 'user2', email: 'user2@example.com', role: 'admin' },
    { username: 'user3', email: 'user3@example.com', role: 'user' },
  ]);
};
