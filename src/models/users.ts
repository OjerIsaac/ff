import * as Objection from 'objection';

export class User extends Objection.Model {
  static get tableName(): string {
    return 'users';
  }

  static get jsonSchema(): Object {
    return {
      type: 'object',
      required: ['username', 'email'],
      properties: {
        id: { type: 'integer' },
        username: { type: 'string', minLength: 1, maxLength: 255 },
        role: { type: 'integer' },
        email: { type: 'string', format: 'email' },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' }
      }
    };
  }
}

export class Brand extends Objection.Model {
  static get tableName(): string {
    return 'brands';
  }

  static get jsonSchema(): Object {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' }
      }
    };
  }

  static get relationMappings(): Objection.RelationMappings {
    return {
      meals: {
        relation: Objection.Model.HasManyRelation,
        modelClass: 'Meal',
        join: {
          from: 'brands.id',
          to: 'meals.brandId'
        }
      }
    };
  }
}
  
export class Meal extends Objection.Model {
  static get tableName(): string {
    return 'meals';
  }

  static get jsonSchema(): Object {
    return {
      type: 'object',
      required: ['name', 'category'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 255 },
        price: { type: 'string', minLength: 1, maxLength: 255 },
        category: { type: 'string', minLength: 1, maxLength: 255 },
        brandId: { type: 'integer' },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' }
      }
    };
  }

  static get relationMappings(): Objection.RelationMappings {
    return {
      brands: {
        relation: Objection.Model.BelongsToOneRelation,
        modelClass: 'Brand',
        join: {
          from: 'meals.brandId',
          to: 'brands.id'
        }
      }
    };
  }
}