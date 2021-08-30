const http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Meu primeiro servidor com Node")
}).listen(3000);