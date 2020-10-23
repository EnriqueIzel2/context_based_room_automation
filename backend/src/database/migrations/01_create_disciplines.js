exports.up = async function(knex) {
  return knex.schema
    .createTable('disciplines', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
    })
};

exports.down = async function(knex) {
  return knex.schema.dropTable('disciplines');
};
