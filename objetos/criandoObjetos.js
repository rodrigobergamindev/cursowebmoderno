// usando a notação literal

const obj1 = {}

//Object em JS
const obj2 = new Object

//Funções Construtoras

function Produto(nome, preco, desc) {
    this.nome = nome;
    this.preco = preco;
    this.desc = desc;
    //ao utilizar this, os atributos e métodos ficam visíveis a partir da instância em que foram criados
        this.getPRecoComDesconto = () => {
            return (preco * (1 - desc)).toFixed(2)
       }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2888.89, 0.25)
console.log(p1.getPRecoComDesconto(), p2.getPRecoComDesconto())

//Função Factory
//Função Factory é um padrão de projeto, onde temos uma função que fabrica objetos

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return(salarioBase / 30 * (30 - faltas))
        }
    }
}


const f1 = criarFuncionario('João', 7880, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Uma função famosa q retorna Objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)