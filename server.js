var http = require("http");

var server = http.createServer(function (req, res){
    //git pullconsole.log('Requisição!')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Rock Pessoa</h1>");
    res.write("<h1>Teste</h1>");
    res.end();
});

server.listen(8080, function(){
    console.log('Servidor inicalizado')
});

server.listen(8080, serverOk);