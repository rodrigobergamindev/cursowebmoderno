//criar uma função que receba uma lista string como parâmetro
//transformar a string em um array
//criar um array que irá receber o número de vezes que o jogador bateu seu recorde e exibir o número do pior jogo
//identificar o primeiro recorde após o primeiro jogo
// percorrer o array jogos e verificar a cada elemento se este é maior que o novoRecorde, se sim, assumir que o novoRecorde será igual o elemento atual e dar um push no array recordes

const controleDosJogos = lista => {
    let arr = lista.split(' ');
    let jogos = []
    arr.forEach(element => {
        return jogos.push(parseInt(element))
    });

    let resultado = []
    let recordes = []
    let novoRecorde = jogos.find(element => element > jogos[0]);
    recordes.push(novoRecorde)

    let rcds = jogos.filter(element => { //criando array para receber os recordes
        if(element > novoRecorde) {
            novoRecorde = element
            return novoRecorde
        }
    })

    let recordesFinal = recordes.concat(rcds) //array com todos os recordes

    Array.min = function(array) {
        return Math.min.apply(Math, array);
    };

    let menorPontuacao = Array.min(jogos) //encontrando a menor pontuação
    let indiceMenorPontuacao = jogos.indexOf(menorPontuacao) //indice da menor pontuação
    let numeroDeRecordes = recordesFinal.length
    resultado.push(numeroDeRecordes, indiceMenorPontuacao)
    return resultado
}

let lista = '10 20 20 8 25 3 8 30 7 45 2 3 5 50 28 71'

console.log(controleDosJogos(lista))