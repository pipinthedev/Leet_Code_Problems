const mysql = require('mysql');


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    db: 'test'
});

con.connect(function(err){
 if (err) throw err;
 console.log('Connnected');
});