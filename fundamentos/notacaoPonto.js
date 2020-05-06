const obj = {}
obj.nome = "Rodrigo"
obj.idade = 24

console.log(obj) //Em objetos, a notação ponto tem como finalidade acessar atributos, funções e outros membros de um objeto.

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const pessoa = new Pessoa('Rodrigo',24)
const pessoa2 = new Pessoa('Lídia', 21)