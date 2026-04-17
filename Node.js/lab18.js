var fs=require('fs');
fs.unlink('lab18.txt',function(err){
    if (err) throw err;
    console.log('File Deleted');
});
