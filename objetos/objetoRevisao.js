//coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira' //criando atributo para o objeto com a notação ponto 
produto['marca do produto'] = 'Generica'

const carro = {
    modelo: 'A4',
    valor: 89999,
    proprietario: {
        nome:'Rodrigo',
        idade: 56,
        endereco: {
            logradouro: 'Rya ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },
        {
            nome: 'Ana',
            idade: 42
        }],
        calcularValorSeguro: function(){
            // ...
        }
}

console.log(carro)