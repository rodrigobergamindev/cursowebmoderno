class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(nome = 'Rodrigo') {
        super('Bergamin')
        this.nome = nome
    }
}

const filho = new Filho
console.log(filho)