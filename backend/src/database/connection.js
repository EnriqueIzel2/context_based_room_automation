import knex from 'knex';
const { DATABASE_NAME } = require('../utils/conts');

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: `./${DATABASE_NAME}.sqlite`,
  },
  useNullAsDefault: true,
});

export default connection;