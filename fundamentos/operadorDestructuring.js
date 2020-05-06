//O operador Destructuring tem como finalidade desestruturar ou retirar algo de uma estrutura, como um array ou objeto
//Recurso ES2015

//Destructuring em Obj

const pessoa = {
    nome:"Rodrigo",
    idade:24,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome: n, idade: i } = pessoa // retirando do objeto pessoa, o atributo nome e idade e armazenando nas variáveis n e i

//console.log(n, ",", i)


//Destructuring em Array

const [n1, , n3, , n5, n6 = 0] = [10,7,9,8]
//console.log(n1,n3,n5,n6)

//Destructuring em Função

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {
    max: 40,
    min: 20
}
//console.log(rand(obj))

//Destructuring em Array e Função

function rnd([min = 0, max = 1000]){ 
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    
}

console.log(rnd([50,20]))