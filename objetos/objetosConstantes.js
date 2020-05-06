//pessoa aponta para um endereço de memória, dentro deste endereço de memória é onde está o meu objeto
//portanto, é possível realizar alterações no objeto mesmo ele sendo armazenado em uma constante
const pessoa = { nome: 'Pedro'}
pessoa.nome = 'Rodrigo'

//pessoa vai receber um novo objeto com endereço de memória diferente
pessoa = { nome: 'Ana'} //pessoa não poderá apontar para outro objeto, ele sempre irá apontar para o objeto criado acima

Object.freeze(pessoa) //congelando o objeto pessoa, não é mais possível realizar alterações no objeto