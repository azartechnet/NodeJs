'Let us consider a file-read operation in Node'
'The following is a code in Node to read a file synchronously (traditional way)'
var inp=require('fs')
var data=inp.readFileSync('f1.txt',"utf-8")
console.log(data)
console.log("done")