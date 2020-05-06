//repetição de código e criação de vários objetos semelhantes

const prod1 = {
    nome:'Ovo de Pascoa',
    preco: 45
}

const prod2 = {
    nome: 'Ovo de Páscoa 2',
    preco:50
}

//Resolvendo o problema com Função Factory
//Factory é uma função que no final sempre retorna um objeto

function criarPessoa(){
    return {
        nome: 'Rodrigo',
        sobrenome: 'Bergamin'
    }
}

console.log(criarPessoa())