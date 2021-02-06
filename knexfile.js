require('dotenv-safe').config();

module.exports = {
  client: 'postgres',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: __dirname + '/src/database/migrations',
  },
  seeds: {
    directory: __dirname + '/src/database/seeds',
  },
};
