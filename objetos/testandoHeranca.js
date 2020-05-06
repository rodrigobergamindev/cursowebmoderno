const modeloObjeto = {
    nome: 'Anônimo',
    falar(){
        return `Bom dia! Meu nome é: ${this.nome}`
    }
}

const obj3 = {
    nome: 'Rodrigo',
    falar(){
        return `Método sobrescrito por ${this.nome}! : ${super.falar()}`
    }
}

Object.setPrototypeOf(obj3, modeloObjeto)

console.log(obj3.falar())