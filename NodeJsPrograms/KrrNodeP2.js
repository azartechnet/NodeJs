var inputfile=require('fs')
inputfile.readFile("f1.txt",'utf8',function(err,data){
    console.log(data)
});
console.log("done");