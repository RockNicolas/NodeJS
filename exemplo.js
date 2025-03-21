var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var resultado = url.parse(req.url, true);

    for(var k in resultado.query){
        res.write(k + " -> " + resultado.query[k] + "<br>");
    }
    
    if(resultado.query["buscar"]){
        res.write("<form method='GET'><input types='text' name='buscar' value-'" + resultado);
    } else {
        res.write("<form method='GET'><input types='text' name='buscar'></form>")
    }

    res.query("O ID = " + resultado.query["id"] + "<br>")

    res.query("HREF = " + resultado.href + "<br>")

    res.query("PATHNAME = " + resultado.pathname + "<br>")

    res.write(req.url);
    res.end("<hr/>");

});

var serverOk = function(){
    console.log('Servidor incializado!')
}

server.listen(8080, serverOk);