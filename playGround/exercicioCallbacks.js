// const dobro = (numero) => numero*2;
// const triplo = (numero) => numero*3;
// const aplicar = (numero,operacao) => operacao(numero)

//FORMA QUE O PLAYGROUND PEDIU

// function dobro(numero){
//     return numero*2
// }
// function triplo(numero){
//     return numero*3;
// }

// function aplicar(numero,callback){
//     return callback(numero);
// }

// console.log(aplicar(2,dobro))

// //****************************** exercicio 2

// const somar = (numeroA, numeroB) => numeroA + numeroB
// const subtrair = (numeroA, numeroB) => numeroA - numeroB
// const multiplicar = (numeroA, numeroB) => numeroA * numeroB
// const dividir = (numeroA, numeroB) => numeroA / numeroB
// const calculadora = (numeroA, numeroB, callback) => callback(numeroA, numeroB)

// console.log(calculadora(2,5,somar))

//********************************* exercicio 3

// const adicionarHttp = (url) => "http://" + url
// const processar =  (url,callback) => callback(url)

// console.log(processar("www.google.com.br",adicionarHttp))


function adicionarHttp(url) {
    return "http://"+url
}

let listaSites = []

function processar(url, adicionarHttp){
    for(i=0;i<url.length;i++){
        listaSites.push(adicionarHttp(url[i]))
    }
    return (listaSites);
}

console.log(processar(["www.google.com","www.uol.com"],adicionarHttp))