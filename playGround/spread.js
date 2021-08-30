// const frutas = ["maçã","banana","uva"];
// const frutasDois = ["laranja","abacate","goiaba"];
// const listaCompleta = [...frutas,...frutasDois];
// console.log(listaCompleta);

const pessoa = {
    nome:"Edgar",
    idade: 31
}

const infoPessoal = {
    tel:"12991811494",
    rg: 46271657,
    ...pessoa
}
//console.log(infoPessoal);

const pessoaCompleta = {
    endereco: "rua dos bobos",
    ...infoPessoal
}
//console.log(pessoaCompleta);

function letras(...params){
    console.log(params);
}
letras("edgar",31);