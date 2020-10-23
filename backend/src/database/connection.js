const knex = require('knex');
const { DATABASE_NAME, DATABASE_PATH } = require('../utils/conts');

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: `${DATABASE_PATH}/${DATABASE_NAME}.sqlite`,
  },
  useNullAsDefault: true,
});

module.exports = connection;