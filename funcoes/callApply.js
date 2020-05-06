//Mais duas formas de se chamar um objeto

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco:4888,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) //resultado NaN, o preço no contexto global ainda não foi definidoo
console.log(produto.getPreco()) //contexto da função foi definido, preco e desconto definido dentro do obj

const carro = {preco: 49999, desc: 0.2}

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
//diferença entre call e apply está na forma como passar os parâmetros
//call passar normalmente com variáveis
//apply passar o contexto e em seguida um array com os parâmetros