var fs = require('fs');
fs.rename('lab17.txt','lab19.txt',function (err){
    if (err) throw err;
    console.log('File Renamed');
});
