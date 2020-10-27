exports.up = async function(knex) {
  return knex.schema
    .createTable('classroom', (table) => {
      table.increments('id').primary();      
      table.string('name').notNullable();
      table.boolean('status').notNullable();
      table.boolean('airconditioner').notNullable();
    })
};

exports.down = async function(knex) {
  return knex.schema.dropTable('classroom');
};
