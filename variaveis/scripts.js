var nome = "william"; // variaveis do tipo (var) da acesso de forma global ao script
let video ="youtube"; // variavel de scopo local - usada em um escopo especifico;
//exemplo

if(nome ==="william"){
    let idade= "25"; // a variavel idade, não funcionaria fora desse escopo;
    console.log(idade);
}

var temCarro = true;

if(temCarro){
 var possuicarro= "sim"; // essa variavel está disponivel de forma global, voce poderar ter acesso ao conteudo dela em qualquer parte deste script;
}
console.log(possuicarro)
