var http = require("http");
var url = require("url");
var routes = require("routres")

var routes = function(pagina){
    var exist = fs.existsSync(pagina + ".html");

    if(exist){
        pagina + '.html';
    } else {
        "error_404.htlm"
    }
};

var server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    var addresPath = url.parse(req.url).pathname;
    var page = routes(addresPath);

    fs.readFile(page, function (error,arquivo){
        if(error){
            res.end("ERROR")
        } else {
            res.end(arquivo);
        }
    })
    //var retorno = fs.readFileSync("bem vindo")
    //res.end(retorno);

});

var serverOk = function(){
    console.log('Servidor incializado!')
}

server.listen(8080, serverOk);