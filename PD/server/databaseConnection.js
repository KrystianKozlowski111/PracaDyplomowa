const { Client, Pool } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'server',
  password: 'admin',
  port: '5432',
});
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'server',
  password: 'admin',
  port: '5432',
});
module.exports = { client, pool };
