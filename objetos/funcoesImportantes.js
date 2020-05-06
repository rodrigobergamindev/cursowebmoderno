const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) //chaves do objeto pessoa
console.log(Object.values(pessoa)) //valores correspondentes as chaves

Object.entries(pessoa).forEach(([chave, valor]) => { 
    console.log(`${chave} : ${valor}`)
}); //percorrendo propriedades de um objeto

Object.defineProperty(pessoa, 'dataNascimento', { //definindo as características de um novo atributo
    enumerable: true,
    writable: false,
    value: '01/01/2017'
})

const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4} //valor a será sobrescrito no objeto de destino
const obj = Object.assign(dest, o1, o2) //objetos serão concatenados no objeto de destino como atributos
console.log(obj)