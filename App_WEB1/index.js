const calc = require('./util/calculadora');
const express = require("express"); // usa o pacote

const app = express(); //cria a 1° aplicação WEB, porta padrão 8080,  presisa do IP


app.get("/somar/a/b", function(req,res){            //quando recer uma requisação em hello e vai fazer o q é mandado aqui 
    res.send("a + b =" +  calc.somar(a,b));
})


app.get("/ola", function(req,res){            //quando recer uma requisação em hello e vai fazer o q é mandado aqui 
    res.send("Olá, WEB");
})


const PORT = 8080;                                               // Manda rodarna porta 8080 e se tiver rodando, vao rodar na porta 8080, e vai ficar escutando essa porta 
app.listen(PORT, function(){
    console.log("app rodando na porta"+PORT);
}); 

