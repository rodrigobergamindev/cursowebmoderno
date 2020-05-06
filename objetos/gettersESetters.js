const sequencia = {
    _valor: 1, //convenção
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
//utilizando get para retornar o valor e set para setar o valor do objeto sequência

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 999
console.log(sequencia.valor)