const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //retorna uma função
const contadorD = require('./instanciaNova')() 

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor) //objeto exportado do node

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor) //duas instâncias de função foram criadas