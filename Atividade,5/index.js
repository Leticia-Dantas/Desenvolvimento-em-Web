const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());                           //associa ao nome HTML, liga o motor
app.set('view engine', 'html');                                  //vai usar a configuração, no motor HTML para renderizar a pag
app.set('views', __dirname + '/views');                         //onde deve procuraro arquivos HTML, ou seja, as pag que vão renderizar

app.use(express.urlencoded(extends: true));

app.get('/', function(req, res){
    let usuario = {
        nome: 'LET',
        telefone: 123123
    };
    res.render('index.html', {usuario});                           //Subistituir e entregar bonitinho, pesquisar depois,
});                                                             //renderizar é colocar valores dinamicos, ou seja, dar um olá com o nome da pessoa que está acessando a pag

app.get('/dados',function(req,res){   
    let usuario={
        nome: req.query.nome,    //aqui quando é .post  se usa req.body
        telefone: req.query.telefone
    } //paranus é qunado é passado os dados no prapria URL
});
const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT);
});