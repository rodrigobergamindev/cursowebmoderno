//WeakMap é uma coleção de pares chave-valor, onde os valores só podem ser objetos

let weakMap = new WeakMap()

let elemento1 = {nome: 'Xiaomi MI 9'};
let elemento2 = {nome: 'Rodrigo'}

weakMap.set(elemento1, 'sou elemento 1')
weakMap.set(elemento2, 'sou elemento 2')

console.log(weakMap.get(elemento1))