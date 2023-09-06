const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    database:'root',
    user: 'node-complete',
    password: 'Yash@2005'
});

module.exports = pool.promise();