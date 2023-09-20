const express = require("express"); //importa o express pra essa pag

// cria uma variavel pra ser a plicação WEB
const app = express();   // retorna um aplicativo web, cria a plicação do tipo  web

app.get('/', function(req, res){ // res do pacote baixado, abre resposta pra /
    res.send("App funcionando");
});

app.get('/hello/:n', function(req, res){ //  o  /:n é o q a gente usa pra receber algo
    let nome = req.params.n;
    res.send("Ola mundo! Saudações da " + nome);
});

const PORT = 8080; //  port, variavel q diz a porta que estárodando 
app.listen(PORT, function(){  //listen metodo que a gente passa a porta e coloca uma função que passa o q a gente quer q a gente faça
    console.log("app rodando" +  PORT);   // Mostra a porta e a mensagem
});