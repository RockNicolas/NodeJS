var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var retorno = fs.readFileSync("bem vindo")
    
    res.end(retorno);

});

var serverOk = function(){
    console.log('Servidor incializado!')
}

server.listen(8080, serverOk);