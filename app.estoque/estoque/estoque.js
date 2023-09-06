let produtos = Array();   //cria um array

function criar_produto(id, nome, qtd){     //pq usa o let criar variavel
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

function editar_produto(id,qtdAtual){
    let pteditado;
    if(p.id == id){
        p.qtd = qtdAtual;
    }
    return pteditado;
}

function remover_produto(id){
    let pRemovido;
    produtos.forEach(p =>{
        if(p.id == id){
            pRemovido = p;
        }
    });
    //produtos.pop.(pRemovido);    //pop remove a variavel do arrey, sempre pelo ultimo 
}

module.exports ={        // é pra gente poder exportar, ou seja, usar em outras pag
    criar_produto,
    adicionar_produto,
    listar_produto,
    editar_produto,
    remover_produto
}


//Olha o do prof me perdi