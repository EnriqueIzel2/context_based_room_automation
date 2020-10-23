
exports.up = async function(knex) {
  return knex.schema
    .createTable('professors', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
    })
};

exports.down = async function(knex) {
  return knex.schema.dropTable('professors');
};
