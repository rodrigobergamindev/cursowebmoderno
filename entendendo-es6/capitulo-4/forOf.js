let numeros = [1,2,3,4,5]

for(n of numeros) { //loop for of pode percorer um array ou um objeto, cada item do array ou objeto será alocado em uma variável, no caso 'n'
    console.log(n*2)
}


let perfilDoFacebook = {
    nome: 'Carlos',
    idade: 22
    //... outras propriedades
}

for( let dado of perfilDoFacebook){
    console.log(dado) //Erro, Symbol.iterator is not a function, utilizar for in
}

