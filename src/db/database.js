const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'bbkknyxcl9v38d0cjmtp-mysql.services.clever-cloud.com',
    user: 'utijnzuso05u0rue',
    password: 'snFb7fK5P1D8j88veCJy',
    database: 'bbkknyxcl9v38d0cjmtp'
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