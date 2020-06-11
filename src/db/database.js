const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'bik6qusryltsn3pmy1ce-mysql.services.clever-cloud.com',
    user: 'ulga3fzq3gbvca8a',
    password: 'KCaLEH2EfqBporerKZeJ',
    database: 'bik6qusryltsn3pmy1ce'
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