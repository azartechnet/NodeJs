var http=require("http")
http.createServer(function(request,response){
    //send the http header
    //http status:200ok
    //contenttype:text/plain
    response.writeHead(200,{'Content-Type':'text/pain'});
    //send the response body as "helloworld"
    response.end("HelloWorld")
}).listen(8081);
//console will print the message
console.log("server running at http...");