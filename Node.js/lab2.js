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
    var sql="CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql,function (err, result){
        if (err) throw err;
        console.log("Table Created");
    });
});
