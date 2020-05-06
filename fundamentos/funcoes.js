//Uma função é uma sentença de código que recebe parâmetros, esses parâmetros podem ser
// um objeto, uma string, um número, um array e etc e a função irá processar esses elementos
// e retornará um valor ou um objeto, ou alguma coisa

//Uma função tem o comportamento exato de um algoritmo, ela recebe entrada, processa e retorna uma saída
//Uma função não precisa ter uma entrada e não precissa retornar algo necessariamente


//Exemplos

//Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) //NaN

function soma(a, b = 0){
    return a + b
}

console.log(soma(2))




//PARTE 2

//Armazenando uma função em uma variável

const produto = function (a,b) {  //função anônima
    return a + b
}

console.log(produto(3,4))


const somatoria = (a, b) => { // arrow function atribuída a uma constante, aqui notamos a ausência da palavra function, seguida dos
                        //parênteses com os parâmetros
    return a + b
}

const subtracao = (a, b) => a - b // arrow function com apenas uma linha, retorno implícito
console.log(subtracao(2,3))