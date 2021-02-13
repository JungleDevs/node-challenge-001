import { Model } from 'objection';

class Author extends Model {
  static get tableName() {
    return 'authors';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        picture: { type: ['string', 'null'] },
      },
    };
  }
}

export default Author;
