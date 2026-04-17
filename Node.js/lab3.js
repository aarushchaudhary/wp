var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "db1"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    var sql="ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql,function (err, result){
        if (err) throw err;
        console.log("Table Altered");
    });
});
