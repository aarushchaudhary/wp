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
    var sql="DROP TABLE kuchbhirakhdeoutputsamehiaayega";
    con.query(sql,function (err, result){
        if (err) throw err;
        console.log(result);
        console.log("Table Deleted");
    });
});
