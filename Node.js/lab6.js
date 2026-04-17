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
    var sql="INSERT INTO customers (name, address) VALUES ?";
    var values=[
        ['John','Highway 71'],
        ['Peter','Lowstreet 4'],
        ['Amy','Apple st 652'],
        ['Hannah','Mountain 21'],
        ['Micheal','Valley 345'],
        ['Sandy','Ocean BLVD 26'],
        ['Betty','Green Grass 1'],
        ['Richard','Sky st 331'],
        ['Susan','One way 89'],
        ['Vicky','Yellow Garden'],
        ['Ben','Park Lane'],
        ['William','Central 954'],
        ['Chuck','Main road 32'],
        ['Viola','Sideway 652']
    ];
    con.query(sql, [values], function (err, result){
        if (err) throw err;
        console.log("Number of records inserted: "+result.affectedRows);
    });
});
