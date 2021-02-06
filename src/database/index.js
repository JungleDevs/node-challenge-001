import knex from 'knex';
import { Model } from 'objection';

import knexConfig from '../../knexfile';

const dbInstance = knex(knexConfig);

console.log(knexConfig);

Model.knex(dbInstance);
