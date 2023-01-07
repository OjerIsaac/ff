import * as Objection from 'objection';

export class User extends Objection.Model {
    static get tableName() {
      return 'users';
    }
}

export class Brand extends Objection.Model {
    static get tableName(): string {
      return 'brands';
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