var fs=require('fs');
fs.open('lab16.txt','w',function(err,file){
    if (err) throw err;
    console.log('Saved');
});
