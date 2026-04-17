var fs=require('fs');
fs.appendFile('lab15.txt','The content in quotation will be written to file!',function(err){
    if (err) throw err;
    console.log('Saved');
});
