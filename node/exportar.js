console.log(module.exports === this) //true
console.log(module.exports === exports) //true
//o this e o exports são apenas referências para onde o module.exports aponta, mas o que será exportado de fato, é o module.exports


this.a = 1 // = module.exports.a = 1
exports.b = 2 // = module.exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = { //mudar a referência de exports não irá alterar o module.exports
    nome: 'Teste'
} //apenas module.exports será de fato exportado

console.log(module.exports)


module.exports = { publico: true} //alteração no module.exports

