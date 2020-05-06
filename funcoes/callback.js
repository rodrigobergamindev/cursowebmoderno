const fabricantes = ['Mercedes', 'BMW', 'Audi']

function imprimir(nome, indice) {
    console.log( `${indice + 1}. ${nome}`)
}
//Função callback é uma função que é passada como parâmetro para outra função, que será disparada mediante a um evento
fabricantes.forEach(imprimir) //passando uma função como callback para forEach
fabricantes.forEach(fabricante => console.log(fabricante)) //O primeiro parâmetro de forEach será cada elemento do array


//Segundo exemplo

const notas = [5.9,5,2,10,9,8,4.4]

let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas) //sem callback

//Com callback

notasBaixas = notas.filter((nota) => nota < 7)
console.log(notasBaixas) //exemplo com callback