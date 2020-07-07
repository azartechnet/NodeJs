//Node.js File System module

//Node.js as a file Server

//The Node.js file system module allows you to wrk as
//To include the file system module.use the require() method
//var fs=require('fs')

//comman process to be done
//Read file
//Create file
//Update file
//Delete file
//Rename file

var http=require('http');
var fs=require('fs')
http.createServer(function(req,res){
    fs.readFile('demofile1.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data)
        return res.end()
    });
}).listen(8081);