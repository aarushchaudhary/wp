const http=require('http');
const mysql=require('mysql');
const querystring=require('querystring');
const fs=require('fs');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'test_db'
});

db.connect(function(err){
    if (err) throw err;
    console.log('MySQL Connected');
});
http.createServer(function(req,res){
    if (req.method==='GET'&&req.url==='/'){
        fs.readFile('lab13.html',function(err,data){
            if(err){
                res.writeHead(500);
                return res.end('Error loading file');
            }
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        });
    }
    else if (req.method==='POST'&&req.url==='/submit'){
        var body='';
        req.on('data',function(chunk){
            body+=chunk;
        });
        req.on('end',function(){
            var formData=querystring.parse(body);
            var sql='INSERT INTO users (name, email) VALUES (?,?)';
            db.query(sql,[formData.name,formData.email],function(err){
                if (err) throw err;
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end('<h3>Data Inserted Successfully!</h3><a href="/">Go Back</a>');
            });
        });
    }
    else {
        res.writeHead(404);
        res.end('Page Not Found');
    }
}).listen(3000);
console.log('Server running at http://localhost:3000');
