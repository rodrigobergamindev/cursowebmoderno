function arredondar(nota) {
    const multiplosDeCinco = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    let proximoMultiploDe5 = multiplosDeCinco.find(element => (nota - element <= 5)) + 5
    if(proximoMultiploDe5 - nota < 3 ){
        return proximoMultiploDe5
    }else{
        return nota
    }
    
}

const calcularAprovacao = (nota) => {
    if(arredondar(nota) < 40) {
        return `Nota do aluno é: ${arredondar(nota)}, está reprovado`
    }else{
        return `Nota do aluno é: ${arredondar(nota)}, está aprovado`
    }
}

console.log(calcularAprovacao(84))




