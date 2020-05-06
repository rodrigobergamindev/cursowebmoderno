// Arrow Function com retorno implicito
const soma = (a,b) => a + b
console.log(soma(2,3))

//Arrow Function (this)

const lexico1 = () => console.log(this === module.exports) // função criada dentro do contexto de módulos do node, sempre apontará para o module.exports
//em uma função tradicional, o this pode variar ou pode apontar para global
const lexico2 = lexico1.bind({}) //amarra o contexto de this

//parametro default

function log(texto = 'Node'){
    console.log(texto)
}

log() //assumindo valor padrão

//operador rest

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,35,6,6,7))