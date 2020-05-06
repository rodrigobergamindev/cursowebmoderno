const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework : true})

console.log(tecnologias.react) //não funciona
console.log(tecnologias.get('react').framework)


const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    ['123', 'Número'],
]) //criando um map e passando os valores diretamente

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
console.log(delete(123))
console.log(chavesVariadas.size) //tamanho do map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas) //os valores podem ser substituídos, mas a chave não aceita repetição
// boolean, objeto, string, função, podem ser setados como chave