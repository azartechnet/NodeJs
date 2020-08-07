'The following is a code in Node to read a file asynchronously'
var inputfile=require('fs')
inputfile.readFile("f1.txt",'utf8',function(err,data){
    console.log(data)
});
console.log("done");