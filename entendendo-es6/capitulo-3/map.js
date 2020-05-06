//O método map tem como intuito percorrer um array e modificar cada um de seus itens
//ele constrói e retorna um novo array, no qual temos que alocar em uma nova variável

var numeros = [24,48,120]

var metade = numeros.map((numero) => {
    return numero / 2;
})

console.log(numeros)
console.log(metade)