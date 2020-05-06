function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) //true
console.log(MeuObjeto.prototype === obj1.__proto__) //true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    return `Bom Dia! Meu nome é ${this.nome}`
}


const obj3 = {
    nome: 'Rodrigo',
    falar(){
        return `Método sobrescrito! ${super.falar()}`
    }
}
Object.setPrototypeOf(obj3, MeuObjeto.prototype)
console.log(obj3.falar())
console.log(obj3.__proto__ === MeuObjeto.prototype)