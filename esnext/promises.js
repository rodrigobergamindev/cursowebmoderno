//operações assíncronas

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(frase)
            }, segundos * 1000)
    })
}


falarDepoisDe(3, 'Que legal!')
    .then((frase) => frase.concat('?!?')) //then será chamado assim que a promessa for resolvida, ele aceita apenas um único parâmetro
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))//catch será chamado caso a promessa for rejeitada

    //then pode ser chamado quantas vezes forem necessárias para gerar um encademaneto de processamento, em cima do que foi recebido de resolve
    

