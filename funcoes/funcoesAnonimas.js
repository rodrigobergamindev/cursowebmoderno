//Funções anônimas

const soma = function (x,y) {
    return x + y
}

const imprimirResultado = function (a,b, operacao = soma) { 
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function(x,y) {
    return x-y
})
imprimirResultado(3,4, (x,y) => x*y) //exemplo de função arrow, retorno implícito sem a palavra function, return e as chaves
//criando uma função anonima dentro deu um objeto

const pessoa = {
    falar: () => {
        console.log('Olá')
    }
}

pessoa.falar()