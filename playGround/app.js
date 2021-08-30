const http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});

        switch(req.url){
            case "/":
                res.end("Você está na HomePage");
                break;
            case "/contato":
                res.end("Você está na página contato");
                break;
            default:
                res.end("página não encontrada");  
        }

}).listen(3000);