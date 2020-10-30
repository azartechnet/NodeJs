var http=require('http')
http.createServer(function(request,response){
//send the http header
//http status 200 ok
//content typ:text/plain
response.writeHead(200,{
    'content-Type':'text/plain'
});
//send the response body  as "welcome"
response.end("welcome")
}).listen(8081);

console.log("server is running at 8081");