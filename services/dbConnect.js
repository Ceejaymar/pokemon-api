const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/pokemon');

module.exports = {
  db
};