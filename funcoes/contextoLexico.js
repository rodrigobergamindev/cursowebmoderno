const valor = "Global"

function minhaFuncao(){
    console.log(valor) //procura a variável/constante 'valor' no escopo maior
}

function exec(){
    const valor = 'Local'
    minhaFuncao() //resgatará a variável valor = Global, por conta do contexto léxico em que 'minhaFuncao' foi declarada
}

exec()