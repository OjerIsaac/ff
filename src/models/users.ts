// import { Model } from 'objection';
// import knex from '../config/dbConfig';

// Model.knex(knex);

// // Users Class Service
// export class Users extends Model {
//     static get tableName() {
//     return 'users';
//     }
//     static get jsonSchema() {
//         return {
//             type: 'object',
//             required: ['email'],
//             properties: {
//                 id: { type: 'integer' },
//                 name: { type: 'string' },
//                 email: { type: 'string' },
//                 password: { type: 'string' },
//             }
//         }
//     }
// }

import { Model } from 'objection';

export class User extends Model {
    static get tableName() {
        return 'users';
    }
}