//Estrutura não indexada que não aceita repetição
//Map, objetos e arrays são estruturas indexadas

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') //não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // false
console.log(times.has('Vasco')) //true

const nomes = ['Raquel', 'Lucas', 'Rodrigo', 'Julia', 'Lucas']
const nomesSet = new Set(nomes) //eliminou as repetições do array