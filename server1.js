var http = require("http");

var server = http.createServer(function (req, res){
    //git pullconsole.log('Requisição!')
    
    //res.write(req.headers["user-agent"]);

    if(req.url == "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Rock Pessoa</h1>");
        res.write("<hr>");
        res.write("Seja Bem Vindo");
    } else if (req.url == "/login"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Login no site</h1>");
        res.write("<hr>");
        res.write("<input type='text'>");
    } else if (req.url == "/login"){
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h1>Erro 404</h1>");
        res.write("<hr>");
    } else {
        res.writeHead(301, {Location: 'http://localhost:8080/error'});
    }

    res.end("<hr/>");
});

server.listen(8080, function(){
    console.log('Servidor inicalizado')
});

server.listen(8080, serverOk);