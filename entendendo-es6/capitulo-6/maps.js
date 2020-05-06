//mapas são estruturas de dados com pares de chave-valor
//é possível atribuir funções, strings e até objetos aos atributos de um map

let obj = {}
let funcao = () => {}
let texto = 'string'

let map = new Map();
map.set(obj, 'sou um objeto') //setando os pares chave-valor
map.set(funcao, 'sou uma funcao')
map.set(texto, 'sou uma string')

console.log(map)

console.log(map.get(texto)) //recuperando os atributos de um mapa
console.log(map.get(funcao))

//verificar a existência de uma chave
console.log(map.has(texto))

let map2 = new Map();

map2.set(1, '1')
map2.set(2, '2')
map2.set(3, '3')

for(key of map2.keys()) {
    console.log(key)
}
//método values retorna os valores e o método entries os pares chave-valor

//Mapas vs Objetos
//Mapas são úteis como coleções
//Objetos no geral são usados como registros, com campos e métodos
