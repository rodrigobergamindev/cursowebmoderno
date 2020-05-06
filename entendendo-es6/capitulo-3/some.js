//valida se ao menos um elemento do array satisfaz a condição e retorna um boolean

let pesoDasMalas = [12,32,44,50,89];

let temMalaAcimaDoPeso = pesoDasMalas.some((pesoDaMala) => pesoDaMala > 50)
console.log(temMalaAcimaDoPeso) //true