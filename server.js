var http = require("http");

var server = http.createServer(function (req, res){
    //git pullconsole.log('Requisição!')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Rock Pessoa</h1>");
    res.write("<h1>Teste</h1>");
    res.write("<h1>Teste</h1>");
    res.write(req.headers["user-agent"]);
    res.end("<hr/>");

});

var serverOk = function(){
    console.log('Servidor incializado!')
}

server.listen(8080, serverOk);