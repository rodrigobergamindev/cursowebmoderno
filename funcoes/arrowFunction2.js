let comparaComthis = function(param) {
    console.log(this === param)
}

comparaComthis(global) //this apontará para o objeto global

const obj = {}
comparaComthis = comparaComthis.bind(obj)
comparaComthis(global) //false, agora o this aponta para o obj
comparaComthis(obj) // true, this aponta para o obj

let comparaComthisArrow = param => console.log(this === param)
comparaComthis(global) // false, dentro de uma função arrow, o this não aponta para o global
comparaComthisArrow(module.exports) //true, this aponta para module.exports

comparaComthisArrow = comparaComthisArrow.bind(obj) //false, bind não amarra o this em função arrow
comparaComthisArrow(obj) 