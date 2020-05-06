//operador... rest(juntar) / spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto

const funcionario = { nome: ' Maria', salario: 12333.99}

const clone = { ativo: true, ...funcionario} //espalhando todos os atributos de funcionário dentro do objeto clone

console.log(clone)

//Operador spread em arrays
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Marcos'] // o mesmo acontece com arrays
console.log(grupoFinal)