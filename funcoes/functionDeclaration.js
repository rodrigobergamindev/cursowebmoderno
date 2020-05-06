//function declaration
console.log(soma(3,5)) //O interpretador javascript carrega todas as funções antes de executar o código, eis a vantagem de usar a function declaration
console.log(sub(2,1)) //Isso não funcionaria pois a função está atribuída a uma constante, que só tem seu valor
//atribuido a partir da linha 16



function soma(x,y){
    return x + y
}

//function expression

const sub = function(x,y){
    return x - y
}

//named function expression

const mult = function mult(x,y){
    return x * y
}