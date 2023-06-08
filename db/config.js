const mysql = require('mysql');


//Connecting to local phpmyadmin db
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
    multipleStatements: true
});

module.exports = {pool};