var inputfile=require('fs');
var data=inputfile.readFile("f2.txt",'utf8',function(err,data){
    if(err){
        console.error('This is an error!');
    }
    else
    {
        console.log(data);
    }
});
console.log('Done');
