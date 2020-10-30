//node to read a file synchromusly

var inputfile=require('fs')
var data=inputfile.readFileSync('f1.txt','utf-8');
console.log(data)
console.log('Done!!')