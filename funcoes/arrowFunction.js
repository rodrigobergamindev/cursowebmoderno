//Arrow function é sempre uma função anônima, portanto é necessário
//armazená-la em outra variável ou constante
//o this não muda o contexto em uma função arrow, diferentemente em uma função literal


let dobro = function(a) {
    return 2 * a
} //função literal

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI))