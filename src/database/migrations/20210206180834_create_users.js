exports.up = async knex => {
  await knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('name').notNullable();
    table.unique('email');

    table.timestamps();
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('users');
};
