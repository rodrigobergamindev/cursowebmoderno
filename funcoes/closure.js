//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular as variáveis externas à função

//Contexto léxico em ação!

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
        //function dentro foi declarada dentro da função 'fora()', logo seu closure será a função fora() e retornará o valor x = 'Local'
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) //retornará o valor 'Local'