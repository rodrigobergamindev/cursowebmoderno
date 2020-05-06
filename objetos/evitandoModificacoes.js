//Object.preventExtensions

const produto = Object.preventExtensions( {
    nome:'Qualquer', preco: 1.99, tag:'promocao'
})

const carro = {
    modelo: 'V40',
    marca: 'Tesla Motors'
}

Object.preventExtensions(carro) //Poderá ser alterado, mas não adicionar novos atributos

carro.valor = 4999 //não consegue adicionar o atributo valor

console.log(carro.valor)


//Object.seal

const pessoa = {nome: 'Juliana', idade: 32}
Object.seal(pessoa) //Objeto selado não poderá ter seus atributos alterados e não poderá adicionar novas propriedades
console.log('Selado: ', Object.isSealed(pessoa))