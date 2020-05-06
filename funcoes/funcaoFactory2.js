
//Exercício resolvido

function criarProduto(nome, preco, desconto){
    const calcularDesconto = () => preco - (preco * desconto)
    return {
        nome: nome,
        preco: preco,
        precoComDesconto: calcularDesconto(),
        
    }
}


const prod1 = criarProduto('Samsung Galaxy S9', 4999, 0.2)
console.log(prod1)

