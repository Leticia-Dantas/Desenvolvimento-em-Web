const express = require("express");    // importa
const estoque = require('./estoque/estoque');
const app = express      // cria o app


app.length("/", function(req, res){
    res.send("API Estoque");      //aparece na web, pro usuario 
})

app.get("/api/adicionar/:id/:nome/:qtd", function(req, res){
 let id = req.params.id;
 let nome = req.params.nome;
 

let p = estoque.criar_produto(id, nome, qtd);
 estoque.adicionar_produto(p);
 res.json(p);
});


app.get("/api/editar/:id/:qtdAtual", function(req, res){
    let id = req.params.id;
    let qtdAtual = req.params.qtdAtual;
    let qtd = req.params.qtd;
    
    res.json(p);
   });

app.get("/api/listar",function(req, res){
    res.json(estoque.listar_produto());
})



const PORT = 8080;
app.listen(PORT, function() {     // escuta a porta
    console.log("app rodando na porta" + PORT);      // mensagem q aparece caso estejá funcionado 
})
