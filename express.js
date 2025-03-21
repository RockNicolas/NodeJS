var http = require("http");
var url = require("url");
var path = require('path');
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));

app.get('/calc', function (req,res){
    res.sendFile(path.join(__dirname + "/calc.html"));
});

app.post('/resultado', function (req,res){
    var calc = parseFloat(req.body.txtN1) + parseFloat(req.body.txtN2);
    res.send("total =" + calc.toString());
})

app.listen(8080, function (){
    console.log('Final')
})

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