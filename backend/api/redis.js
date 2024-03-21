const Redis = require('ioredis');
const redis = new Redis({
    port: 6379,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
});

module.exports = redis;