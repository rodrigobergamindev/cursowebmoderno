const pai = {nome:'Pedro', corCabelo:'preto'}

const filha1 = Object.create(pai) //criando um protótipo através de Object.create
filha1.nome = 'Ana'
filha1.corCabelo = 'Castanho'

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha1)
console.log(filha2)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança : ${key}`)
}