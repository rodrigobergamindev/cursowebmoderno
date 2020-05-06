const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c}
const obj2 = { a, b, c}

const nomeAtributo = 'nota'
const valorAtributo = 7.87

const ob3 = {}
obj3[nomeAtributo] = valorAtributo

const obj4 = {[nomeAtributo] : valorAtributo}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //forma antiga
    },
    funcao2() {
        //ES6
    }
}