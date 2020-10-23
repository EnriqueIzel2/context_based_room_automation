// Update with your config settings.
const { DATABASE_NAME, DATABASE_PATH } = require('./src/utils/conts')


module.exports = {
  client: 'sqlite3',
  connection: {
    filename: `${DATABASE_PATH}/${DATABASE_NAME}.sqlite`,
  },
  migrations: {
    directory: `${DATABASE_PATH}/migrations`,
  },
  seeds: {
    directory: `${DATABASE_PATH}/seeds`,
  },
  useNullAsDefault: true,
};
