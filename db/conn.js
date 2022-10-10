const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost', 
  user: 'root',
  password: '0312',
  database: 'nodemysql2',
})

module.exports = pool;