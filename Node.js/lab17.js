var fs=require('fs');
fs.writeFile('lab17.txt','Hello content',function(err){
    if (err) throw err;
    console.log('Saved');
});
