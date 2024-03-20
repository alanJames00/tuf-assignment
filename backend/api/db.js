const mysql = require('mysql2');

console.log(process.env.DB_HOST);
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: '3306',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'tuf',
  connectionLimit: 10,
  waitForConnections: true,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

module.exports = pool;
