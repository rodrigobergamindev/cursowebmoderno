//Conceitos básicos sobre funções

function fun1(){
    //criar função de forma literal
}

const fun2 = function(){
    //Armazenar uma função em uma variável

}

const arr = [function funcao1(a, b){ return a + b }, fun1, fun2]

//console.log(arr[0](2,3)) //executando a primeira função do array

const obj = {}

obj.falar = () => {
    return 'Opa'
}
//console.log(obj.falar())

function func(){
    console.log("função como parâmetro")
}

function run(fun){
    fun()
    //Passar função como parametro
}

console.log(run(func))


function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)

