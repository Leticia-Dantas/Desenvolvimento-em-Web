let produtos = Array();   //cria um array

function criar_produto(id, nome, qtd){     //pq usa o let
    let p ={
        id: id,
        nome: nome,
        qtd: qtd
    }
}

function adicionar_produto(p){
    produtos.push(p);
}

function listar_produto(p){
    return produtos;                        
}

module.exports ={        // é pra gente poder exportar, ou seja, usar em outras pag
    criar_produto,
    adicionar_produto,
    listar_produto
}