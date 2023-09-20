let a = 3;
let b = 1;
console.log('$(a) + $(b) = 4'); ///Pq não aparece o valor de a e b?
    
let arr = [11, 22, 33, 14];
console.log(arr.length); // mostra o tamanho do arry
/*
for(let i = 0; i < arr.length; i++){    ///Não ta funcionando 
    console.log(arr(i));
}*/

arr.forEach(el => {    //el nome da variavel que a gente usa pra ver os elementos do arrey
    if(el === "22"){  //especifica pra imprir só o que for igual a 22,  só vai imprir se for 22 e tiver o mesmo tipo de dado, nesse caso, colocamos a aspa, então é pta 
    console.log(el);  // ser texto, e 22 é numero
    }
});

let obj_pessoa = { // cria um objeto
    nome: "Jota",
    tel: 9999999,
    cpf: 70000,
    obj_en: { //obj dentro de objeto
        end1: "asd",
        end2: "fgh"
    }
};

console.log(obj_pessoa .nome);  // imprime o nome do obj_pessoa
console.log(obj_pessoa .obj_en.end1);  // imprime o nome do obj_pessoa

function somar (a, b){ //função
    return a + b;           
}

console.log(somar(3,4));   //retorno da função