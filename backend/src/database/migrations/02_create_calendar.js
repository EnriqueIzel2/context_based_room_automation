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
      
      table.integer('classroom_id')
        .notNullable()
        .references('id')
        .inTable('classroom');

      table.dateTime('class_date').notNullable();
      table.dateTime('class_start').notNullable();
      table.dateTime('class_end').notNullable();
      table.boolean('class_status').notNullable();
    })
};

exports.down = async function(knex) {
  return knex.schema.dropTable('calendar');
};
