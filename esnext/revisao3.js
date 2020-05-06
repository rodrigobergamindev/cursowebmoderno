//ES8: Object.values/Object.entries

const obj = { a: 1, b: 2, c: 3}
console.log(Object.keys(obj)) //um array de chaves
console.log(Object.entries(obj)) //um array de arrays contendo os pares chave-valor

const nome = 'Carla'
const pessoa = {
    nome,
    ola() { //criando função de forma literal
        return 'Oi gente!'
    }
}

//Class

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
} 

const dog = new Cachorro() //criando objeto a partir de uma função

console.log(dog.falar())