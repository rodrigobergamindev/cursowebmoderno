// let e const
{
    var a = 2
    let b = 3
}
console.log(a)
//let tem escopo de bloco

//Template String

const produto = 'iPad'
console.log(`${produto} é caro`)

//Destructuring

const [l , e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, ,y] = [1, 2 ,3]
console.log(x, y) //pula o segundo elemento no array

const pessoa = { nome: 'Ana', idade:9}
const {idade , nome} = pessoa