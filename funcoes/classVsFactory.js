class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


//Mesmo exemplo utilizando função Factory

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) //Utilizando a função factory não há necessidade de usar
        //a palavra this, por que ele tem consciência do contexto léxico em que foi declarado
    }
}

const p2 = criarPessoa('João')

function Pessoaa(nome){
    this.nome = nome
    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const p3 = new Pessoaa('John') //utilizando função factory para realizar o mesmo exemplo da classe Pessoa