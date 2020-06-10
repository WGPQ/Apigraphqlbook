const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books'
});


db.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Database Connec Sucessfull');
    }
});


exports.db = db;    