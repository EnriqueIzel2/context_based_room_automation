
exports.up = async function(knex) {
  return knex.schema
    .createTable('calendar', (table) => {
      table.increments('id').primary();

      table.integer('professor_id')
        .notNullable()
        .references('id')
        .inTable('professors');

      table.integer('discipline_id')
        .notNullable()
        .references('id')
        .inTable('disciplines');
      
      table.dateTime('start_class').notNullable();
      table.dateTime('end_class').notNullable();
      table.boolean('class_status').notNullable();
    })
};

exports.down = async function(knex) {
  return knex.schema.dropTable('calendar');
};
